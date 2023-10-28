import Document, { Html, Head, Main, NextScript } from "next/document";
import Nav from "./nav";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
{/*         <script type="text/javascript">
            {`atOptions = {
              'key': 'f92ccb91f88f4a56bb0199822fdc6715',
              'format': 'iframe',
              'height': 250,
              'width': 300,
              'params': {}
            };
            document.write('<scr' + 'ipt type="text/javascript" src="//www.profitablecreativeformat.com/f92ccb91f88f4a56bb0199822fdc6715/invoke.js"></scr' + 'ipt>');`}
          </script> */}
          <div dangerouslySetInnerHTML={{ __html: `
          
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-SKGYHHNRJF"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-SKGYHHNRJF');
            </script>`}}/>
            
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <meta name="keywords" content="Youtube Thumbnail Downloader,free Youtube Thumbnail Downloader,Youtube Thumbnail grabber,Downloader  Youtube Thumbnail free ,Downloader thumbnails, download high quality thumbnails, download high quality video thumbnails from YouTube video"/>
          <meta name="description" content="Youtube Thumbnail Downloader with high image quality for free and easy to use"/>
          <meta name="title" content="Youtube Thumbnail Downloader"/>
        </Head>
        <body>
      <Nav/>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
