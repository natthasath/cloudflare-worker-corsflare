# 🎉 Cloudflare Worker CORSflare
A minimal Cloudflare Workers for handling CORS correctly. Includes preflight support, configurable headers, and sane defaults to stop browser tantrums before they start.

![version](https://img.shields.io/badge/version-1.0-blue)
![rating](https://img.shields.io/badge/rating-★★★★★-yellow)
![uptime](https://img.shields.io/badge/uptime-100%25-brightgreen)

## ✨ Features

- ✅ Bypass CORS restrictions for any API
- ✅ Support all HTTP methods (GET, POST, PUT, DELETE, etc.)
- ✅ Fast and reliable with Cloudflare's global network
- ✅ Easy to deploy in seconds

## 🎯 Quick Deploy

Click the button below to deploy your own instance:

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/natthasath/cloudflare-worker-corsflare)

## 📖 Usage

Once deployed, use your Worker URL to proxy requests:
```bash
https://your-worker.workers.dev?url=https://api.example.com/data
```

### Example:

**Original API (with CORS issues):**
```
https://api.example.com/users
```

**Proxied through CORSflare:**
```
https://corsflare-proxy.your-subdomain.workers.dev?url=https://api.example.com/users
```

### JavaScript Example:
```javascript
fetch('https://corsflare-proxy.your-subdomain.workers.dev?url=https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

## 🧪 Testing

### Method 1: Use Built-in Test Page

Open `cors-test.html` in your browser to test your CORS proxy with a beautiful UI:

1. Open `cors-test.html` in any web browser
2. Enter your Worker URL
3. Enter the API URL you want to test
4. Click "Test CORS Proxy"
5. See the results instantly!

**Features of the test page:**
- 🎨 Beautiful and responsive UI
- 🚀 Real-time response display
- 📊 Shows status code and response time
- 📝 Pre-loaded example APIs to test
- 🔄 Support all HTTP methods

### Method 2: Quick Browser Test

Simply visit:
```
https://your-worker.workers.dev?url=https://jsonplaceholder.typicode.com/posts/1
```

### Method 3: cURL Command

```bash
curl "https://your-worker.workers.dev?url=https://api.example.com/data"
```

## 🛠️ Manual Deployment

1. Clone this repository:
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

2. Install Wrangler CLI:
```bash
npm install -g wrangler
```

3. Login to Cloudflare:
```bash
wrangler login
```

4. Deploy:
```bash
wrangler deploy
```

## ⚙️ Configuration

Edit `wrangler.toml` to customize:
- Worker name
- Account ID
- Routes and domains

## 📝 License

MIT License - feel free to use and modify!

## 🤝 Contributing

Pull requests are welcome!

---

**Made with ❤️ using Cloudflare Workers**