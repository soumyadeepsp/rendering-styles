require('ignore-styles');
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  extensions: ['.js', '.jsx']
});
// npm install ignore-styles @babel/register @babel/preset-env @babel/preset-react express react-dom

const path = require('path');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const App = require('./src/App').default;

const app = express();
app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (req, res) => {
  const appHTML = ReactDOMServer.renderToString(React.createElement(App));
  // appHTML is the stringified HTML of my entire React app
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR React App</title>
        <link rel="stylesheet" href="/static/css/main.css" />
      </head>
      <body>
        <div id="root">${appHTML}</div>
        <script src="/static/js/bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(8000, () => {
  console.log('SSR server running at http://localhost:8000');
});
