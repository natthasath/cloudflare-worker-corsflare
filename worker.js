export default {
  async fetch(request) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,POST,PUT,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Max-Age": "86400",
    };

    // Handle preflight requests
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders,
      });
    }

    const url = new URL(request.url);
    const targetUrl = url.searchParams.get("url");

    // Check if URL parameter is provided
    if (!targetUrl) {
      return new Response(
        JSON.stringify({
          error: "Missing 'url' parameter",
          usage: "Add ?url=https://example.com to your request",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    try {
      // Validate URL
      new URL(targetUrl);

      // Forward the request
      const response = await fetch(targetUrl, {
        method: request.method,
        headers: request.headers,
        body: request.method !== "GET" && request.method !== "HEAD" ? await request.arrayBuffer() : undefined,
      });

      // Clone response and add CORS headers
      const newResponse = new Response(response.body, response);
      
      Object.keys(corsHeaders).forEach(key => {
        newResponse.headers.set(key, corsHeaders[key]);
      });

      return newResponse;
    } catch (error) {
      return new Response(
        JSON.stringify({
          error: "Invalid URL or fetch failed",
          message: error.message,
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }
  },
};