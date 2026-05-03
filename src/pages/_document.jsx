import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  const basePath = process.env.HOMEPAGE_BASE_PATH ?? "";

  return (
    <Html>
      <Head>
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="manifest" href={`${basePath}/site.webmanifest?v=4`} crossOrigin="use-credentials" />
        <link rel="preload" href={`${basePath}/api/config/custom.css`} as="style" />
        <link rel="stylesheet" href={`${basePath}/api/config/custom.css`} /> {/* eslint-disable-line @next/next/no-css-tags */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
