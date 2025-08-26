// pages/_app.js
import Script from "next/script";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://app.rybbit.io/api/script.js"
        data-site-id="2217"
        strategy="afterInteractive"
      />
    </>
  );
}

export default MyApp;
