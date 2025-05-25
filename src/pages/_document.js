import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ------------css-------------- */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/all.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />


        {/* ------------meta tags-------------- */}
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

        
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        {/*-------------- js-------------*/}
        <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous" strategy="beforeInteractive" />
        <Script src="/assets/js/customize.js" strategy="beforeInteractive" />
      </body>
    </Html>
  );
}
