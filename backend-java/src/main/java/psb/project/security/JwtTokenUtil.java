package psb.project.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.algorithms.Algorithm;

public class JwtTokenUtil {

    private static final String SECRET_KEY = "SECRET_KEY";

    public static String getEmailFromToken(String token) {
        DecodedJWT jwt = JWT.require(Algorithm.HMAC256(SECRET_KEY))
                .build()
                .verify(token);
        return jwt.getClaim("email").asString();
    }
}