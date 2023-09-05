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
        <meta name="keywords" content="youtube, thumbnails, download, high quality"/>
        <meta name="keywords" content="free Youtube Thumbnail Downloader,YouTube, thumbnails, download, high quality, video thumbnails, YouTube video, thumbnail downloader, download thumbnails, free, online tool, grab thumbnails, HD thumbnails, tutorial, how-to, images, pictures, download images, extract thumbnails, video preview, images from YouTube, video screenshot, extract screenshots"/>


        {/* Other meta tags */}
      </Head>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Download high-quality thumbnails from YouTube videos."
        canonical="https://youtubethumb-five.vercel.app"
        openGraph={{
          url: "https://youtubethumb-five.vercel.app",
          title: "Youtube Thumbnail Downloader",
          description: "Download high-quality thumbnails from YouTube videos.",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
