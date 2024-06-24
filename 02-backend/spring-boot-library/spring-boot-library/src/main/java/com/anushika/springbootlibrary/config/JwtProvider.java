//package com.anushika.springbootlibrary.config;
//
//import javax.crypto.SecretKey;
//
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import io.jsonwebtoken.security.Keys;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.GrantedAuthority;
//import java.util.Collection;
//import java.util.Date;
//import java.util.HashSet;
//import java.util.Set;
//
//public class JwtProvider {
//
//    static SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());
//
//    public static String generateToken(Authentication auth) {
//
//        Collection<? extends GrantedAuthority> authorities = auth.getAuthorities();
//        String roles = populateAuthorities(authorities);
//
//        String jwt = Jwts.builder()
//                .setIssuedAt(new Date())
//                .setExpiration(new Date(new Date().getTime()+86400000))
//                .claim("email", auth.getName())
//                .claim("authorities", roles)
//                .signWith(SignatureAlgorithm.HS256, key)
//                .compact();
//
//        return jwt;
//    }
//
//    public static String populateAuthorities(Collection<? extends GrantedAuthority> authorities) {
//        Set<String> auths = new HashSet<>();
//        for (GrantedAuthority authority : authorities) {
//            auths.add(authority.getAuthority());
//        }
//        return String.join(",", auths);
//    }
//
//    public static String getEmailFromJwtToken (String jwt) {
//        jwt = jwt.substring(7);
//        try {
//            Claims claims = Jwts.parser().setSigningKey(key).parseClaimsJws(jwt).getBody();
//            String email = String.valueOf(claims.get("email"));
//            return email;
//        } catch (Exception e) {
//            System.err.println("Error extracting email from JWT: " + e.getMessage());
//            e.printStackTrace();
//            return null;
//        }
//    }
//}
