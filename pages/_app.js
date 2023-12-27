import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import React from "react";


function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>YouTube Thumbnail Downloader: High-Quality Tool</title>
        <meta
          name="google-site-verification"
          content="4N0Tu0ECqYQVvFg9C6Hr0DtbNL7BgIWouBE8Y0wcFDA"
        />
        <meta name="ahrefs-site-verification" content="81e51e636e6acc95dd2a4e51a699c6381cc9064d14b297df97aa4fddf6d7fe18"></meta>
        <meta name="description" content="Download high-quality YouTube video thumbnails effortlessly with our free youtube Thumbnail Downloader tool." />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.png" />
              
      </Head>
{/*       <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Download youtube thumbnail Images for free of all quality"
        canonical="https://youtubethumb-five.vercel.app"
        openGraph={{
          url: "https://youtubethumb-five.vercel.app",
          title: "Youtube Thumbnail Downloader",
          description: "Youtube Thumbnail Downloader with high image quality for free and easy to use",
          site_name: "Youtube Thumbnail Downloader",
        }}
      /> */}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
