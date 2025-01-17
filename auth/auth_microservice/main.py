"""Authentication and authorization microservice"""
from datetime import datetime, timedelta
from functools import wraps
import os
import sys
from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_apscheduler import APScheduler
from sqlalchemy.sql import text
import jwt

class Config:
    """Config class for Flask app"""
    SCHEDULER_API_ENABLED = True
    # SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root@127.0.0.1/authdb' # For local testing
    # SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:rootadmin@mysql-container/authdb' # For Docker
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root@host.docker.internal/authdb' # Docker container connecting to locally hosted database

    SECRET_KEY = os.urandom(24)
    
    

app = Flask(__name__)
app.config.from_object(Config())

scheduler = APScheduler()
scheduler.init_app(app)
scheduler.start()

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

class User(db.Model):
    """User model"""
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    role = db.Column(db.String(50), nullable=False)
    
class Token(db.Model):
    """Token model"""
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    token = db.Column(db.String(500), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    is_active = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow())
    

def token_required(f):
    """Token verify method"""
    @wraps(f)
    def decorated(*args, **kwargs):
        # Check if token is provided
        token = request.headers.get('Authorization')

        if not token:
            return 'Token is missing', 401

        token = token.split(' ')
        if len(token) < 2:
            return 'Token is missing', 402
        
        token = token[1]

        # Check if token is valid

        stored_token = Token.query.filter_by(token=token).first()

        if stored_token is None:
            return 'Token has expired or is invalid', 405
        
        return f(*args, **kwargs)

    return decorated

def deactivate_old_tokens():
    """Token deactivation method"""
    try:
        expiration_time = datetime.utcnow() - timedelta(hours=2)
        Token.query.filter(Token.created_at < expiration_time).update({'is_active': False})
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        print("Failed to deactivate tokens: ", e)
        
# Schedule token deactivation every 1 hours
scheduler.add_job(id='deactivate_old_tokens', func=deactivate_old_tokens, trigger='interval', hours=2)

@app.route('/db_check', methods=['GET'])
def db_check():
    """Database connection check method"""
    try:
        db.session.execute(text("SELECT 1")).all()
        return jsonify({'status': 'success', 'message': 'Database connection successful'}), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': f'Database connection failed: {e}'}), 500

@app.route('/register', methods=['POST'])
def register():
    """User registstration method"""
    data = request.get_json()
    
    # Check if email already exists
    user = User.query.filter_by(email=data['email']).first()
    if user:
        return jsonify({'message': 'Email already exists'})
    
    # Hash password
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')

    new_user = User(email=data['email'], password=hashed_password, role='user')
    
    # Add user to database
    try:
        db.session.add(new_user)
        db.session.commit()
        
        # Verify if user has been added
        verify_user = User.query.filter_by(email=data['email']).first()
        if verify_user:
            return jsonify({'message': 'User created successfully'}), 201
        else:
            return jsonify({'message': 'Failed to create user'}), 500
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'An error occurred: ' + str(e)}), 500

@app.route('/login', methods=['POST'])
def login():
    """Login method"""
    auth_header = request.headers.get('Authorization')
    
    # Check if credentials are provided
    if not auth_header:
        return make_response('Authorization header is missing', 410, {'WWW-Authenticate': 'Basic realm="Login required!"'})

    # Parse the Authorization header
    try:
        auth_type, auth_credentials = auth_header.split(' ')
        if auth_type.lower() != 'basic':
            return make_response('Invalid authorization type', 411, {'WWW-Authenticate': 'Basic realm="Login required!"'})
        email, password = auth_credentials.split(':')
    except ValueError:
        return make_response('Authorization header format is incorrect', 412, {'WWW-Authenticate': 'Basic realm="Login required!"'})

    
    # Check if user exists and password is correct
    user = User.query.filter_by(email=email).first()

    if not user or not bcrypt.check_password_hash(user.password, password):
        return make_response('Could not verify user or password', 413, {'WWW-Authenticate': 'Basic realm="Login required!"'})

    # Login and generate session token
    token = jwt.encode(
        payload={'email': user.email, 'exp': datetime.utcnow() + timedelta(hours=1)},
        key=app.config['SECRET_KEY'],
        algorithm='HS256'
    )
    
    # Add token to database
    new_token = Token(token=token, user_id=user.id, is_active=True)
    try:
        db.session.add(new_token)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Failed to add token to database: ' + str(e)}), 500
    
    return jsonify({'token': token})


@app.route('/protected', methods=['GET'])
@token_required
def protected():
    # Check user access using token
    return 'Authentication successful!'

if __name__ == '__main__':
    with app.app_context():
        # Check if connection to database is successful
        try:
            db.create_all()
            print("Connected to the database successfully.")
        except Exception as e:
            print("Failed to connect to the database: ", e)
            sys.exit()
    app.run(host="0.0.0.0", debug=True)