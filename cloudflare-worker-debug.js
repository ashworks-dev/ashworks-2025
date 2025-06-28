// src/index.js - Debug version
var tokens = [
  { token: "1234", note: "Test Token 1" },
  { token: "1049", note: "pkey" },
  { token: "9687", note: "pkey" },
  { token: "5212", note: "pkey" },
  { token: "4593", note: "pkey" },
  { token: "1158", note: "pkey" },
];

var src_default = {
  async fetch(request) {
    const url = new URL(request.url);
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, HEAD, OPTIONS",
      "Access-Control-Max-Age": "86400",
      "Access-Control-Allow-Headers": "x-worker-key,Content-Type,x-custom-metadata,Content-MD5,x-amz-meta-fileid,x-amz-meta-account_id,x-amz-meta-clientid,x-amz-meta-file_id,x-amz-meta-opportunity_id,x-amz-meta-client_id,x-amz-meta-webhook",
      "Access-Control-Allow-Credentials": "true",
      "Allow": "GET, POST, PUT, DELETE, HEAD, OPTIONS"
    };
    
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }
    
    if (url.pathname === "/") {
      return new Response(JSON.stringify({ Hello: "World" }), {
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }
    
    if (url.pathname === "/verify-token") {
      const token = url.searchParams.get("token");
      
      // Debug logging
      console.log("Received token:", token);
      console.log("Token type:", typeof token);
      console.log("Available tokens:", tokens.map(t => ({ token: t.token, type: typeof t.token })));
      
      if (!token) {
        return new Response(
          JSON.stringify({ detail: "Token is required" }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
      
      // Trim whitespace and ensure string comparison
      const cleanToken = token.toString().trim();
      console.log("Clean token:", cleanToken);
      
      const matchedToken = tokens.find((entry) => entry.token.toString().trim() === cleanToken);
      console.log("Matched token:", matchedToken);
      
      if (matchedToken) {
        return new Response(
          JSON.stringify({ accessGranted: true, note: matchedToken.note }),
          { headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      } else {
        return new Response(
          JSON.stringify({ 
            detail: "Access denied. Invalid token.",
            debug: {
              receivedToken: token,
              cleanToken: cleanToken,
              availableTokens: tokens.map(t => t.token)
            }
          }),
          { status: 403, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
    }
    
    return new Response("Not Found", { status: 404, headers: corsHeaders });
  }
};

export {
  src_default as default
}; 