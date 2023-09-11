import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <meta name="theme-color" content="#286efb" />
          <link rel="apple-touch-icon" href="/icon-192x192.png" />
          <meta name="apple-mobile-web-app-status-bar" content="#286efb" />
          <meta
            name="description"
            content="A platform for handouts and grading students"
          />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="fullscreen-container" />
          <div id="modal-container" />
          <div id="date-picker-container" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
