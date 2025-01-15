import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoginBackground from '@/assets/LoginBackground.png'; // Replace with your actual background image path

const Login = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-between relative"
      style={{
        backgroundImage: `url(${LoginBackground})`,
        backgroundSize: 'fit', // Covers the entire screen
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', // Keeps the image centered
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow relative">
        {/* Title */}
        <div
          className="absolute"
          style={{
            top: '17%',
            left: '51.1%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <h1
            className="text-white font-bold text-center"
            style={{
              fontSize: '60px', // Adjust font size

            }}
          >
            Welcome back!
          </h1>
        </div>

        {/* Email Label */}
        <div
          className="absolute"
          style={{
            top: '29%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <label
            htmlFor="email"
            className="text-white"
            style={{
              fontSize: '24px',
            }}
          >
            Email
          </label>
        </div>

        {/* Email Input */}
        <div
          className="absolute"
          style={{
            top: '35%',
            left: '51%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <input
            id="email"
            type="email"
            className="border-2 border-gray-400 px-4 py-2"
            style={{
              fontSize: '18px',
              width: '500px',
              borderRadius: '100px', // Fully rounded corners
            }}
            placeholder="Enter your email"
          />
        </div>

        {/* Password Label */}
        <div
          className="absolute"
          style={{
            top: '44%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <label
            htmlFor="password"
            className="text-white"
            style={{
              fontSize: '24px',
            }}
          >
            Password
          </label>
        </div>

        {/* Password Input */}
        <div
          className="absolute"
          style={{
            top: '50%',
            left: '51%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <input
            id="password"
            type="password"
            className="border-2 border-gray-400 px-4 py-2"
            style={{
              fontSize: '18px',
              width: '500px',
              borderRadius: '100px', // Fully rounded corners
            }}
            placeholder="Enter your password"
          />
        </div>

        {/* Remember Me */}
        <div
          className="absolute flex items-center"
          style={{
            top: '55%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me" className="ml-2 text-white">
            Remember me
          </label>
        </div>

        {/* Login Button */}
        <div
          className="absolute"
          style={{
            top: '60%',
            left: '50.4%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <button
            className="bg-white text-black px-6 py-2 rounded-md"
            style={{
              fontSize: '18px',
              width: '150px',
            }}
          >
            Login
          </button>
        </div>

        {/* Forgot Password */}
        <div
          className="absolute text-center"
          style={{
            top: '70%',
            left: '51%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <p>
            <a href="/forgot-password" className="text-white underline">
              I forgot my password
            </a>
          </p>
        </div>

        {/* Sign-Up */}
        <div
          className="absolute text-center"
          style={{
            top: '74%',
            left: '51%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <p>
            <a href="/signup" className="text-white underline">
            Don't have an account?{' '}
              Create one here.
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Login;
