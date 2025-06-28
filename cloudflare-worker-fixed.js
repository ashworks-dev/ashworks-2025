// src/index.js - Fixed version
const tokens = [
  "1234",
  "1049", 
  "9687",
  "5212",
  "4593",
  "1158"
];

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, HEAD, OPTIONS",
      "Access-Control-Max-Age": "86400",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json"
    };
    
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }
    
    // Root endpoint
    if (url.pathname === "/") {
      return new Response(JSON.stringify({ 
        message: "Token verification API",
        availableTokens: tokens 
      }), { headers: corsHeaders });
    }
    
    // Token verification endpoint
    if (url.pathname === "/verify-token") {
      const token = url.searchParams.get("token");
      
      // Log for debugging
      console.log("Received token:", token);
      console.log("Available tokens:", tokens);
      
      if (!token) {
        return new Response(JSON.stringify({ 
          error: "Token is required",
          detail: "Please provide a token parameter"
        }), { 
          status: 400, 
          headers: corsHeaders 
        });
      }
      
      // Simple string comparison
      const isValidToken = tokens.includes(token);
      console.log("Token valid:", isValidToken);
      
      if (isValidToken) {
        return new Response(JSON.stringify({ 
          accessGranted: true, 
          message: "Token verified successfully",
          token: token
        }), { headers: corsHeaders });
      } else {
        return new Response(JSON.stringify({ 
          error: "Access denied",
          detail: "Invalid token",
          receivedToken: token,
          availableTokens: tokens
        }), { 
          status: 403, 
          headers: corsHeaders 
        });
      }
    }
    
    // 404 for unknown endpoints
    return new Response(JSON.stringify({ 
      error: "Not Found",
      detail: "Endpoint not found"
    }), { 
      status: 404, 
      headers: corsHeaders 
    });
  }
}; 