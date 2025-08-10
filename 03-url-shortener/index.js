require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dns = require('dns');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Middleware to parse POST body (urlencoded)
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/public', express.static(`${process.cwd()}/public`));

// Serve front page
app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// For testing
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

// Data storage for URLs
let urls = {};
let counter = 1;

// POST endpoint to shorten URL
app.post('/api/shorturl', (req, res) => {
  let submittedUrl = req.body.url;

  try {
    let urlObj = new URL(submittedUrl);

    // Validate host with DNS lookup
    dns.lookup(urlObj.hostname, (err) => {
      if (err) {
        return res.json({ error: 'invalid url' });
      }

      // Store the URL and return short_url
      urls[counter] = submittedUrl;
      res.json({
        original_url: submittedUrl,
        short_url: counter
      });
      counter++;
    });
  } catch {
    res.json({ error: 'invalid url' });
  }
});

// GET endpoint to redirect short URL to original URL
app.get('/api/shorturl/:id', (req, res) => {
  let id = req.params.id;
  let originalUrl = urls[id];
  if (originalUrl) {
    res.redirect(originalUrl);
  } else {
    res.json({ error: 'No short URL found for given input' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
