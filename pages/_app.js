import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta
          name="google-site-verification"
          content="4N0Tu0ECqYQVvFg9C6Hr0DtbNL7BgIWouBE8Y0wcFDA"
        />
        <meta name="keywords" content="Youtube Thumbnail Downloader,free Youtube Thumbnail Downloader,Youtube Thumbnail grabber,Downloader  Youtube Thumbnail free ,Downloader thumbnails, download high quality thumbnails, download high quality video thumbnails from YouTube video"/>
        <meta name="description" content="Youtube Thumbnail Downloader with high image quality for free and easy to use"/>


        {/* Other meta tags */}
      </Head>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Download youtube thumbnail Images for free of all quality"
        canonical="https://youtubethumb-five.vercel.app"
        openGraph={{
          url: "https://youtubethumb-five.vercel.app",
          title: "Youtube Thumbnail Downloader",
          description: "Youtube Thumbnail Downloader with high image quality for free and easy to use",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
