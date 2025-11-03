const express = require('express');
const fetch = require('node-fetch'); // optional, if fetching Shopify CDN

const app = express();

// Replace this with your Shopify CDN URL
const llmsCDNUrl = 'https://cdn.shopify.com/s/files/1/0682/4466/8585/files/llms.txt?v=1762209753';

app.get('/llms.txt', async (req, res) => {
  try {
    // Fetch the file from Shopify CDN
    const response = await fetch(llmsCDNUrl);
    const text = await response.text();

    res.set('Content-Type', 'text/plain');
    res.send(text); // serve as plain text
  } catch (err) {
    res.status(500).send('Error fetching llms.txt');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`LLMS server running on port ${PORT}`));
