import { useState } from "react";
import Nav from "./nav";

import AdComponent from "./Ad";
import Head from "next/head";






const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  const downloadImage = (url) => {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "thumbnail.jpg"; // You can change the file name here
    anchor.setAttribute("download", anchor.download); // Set the download attribute
    anchor.style.display = "none"; // Hide the anchor
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor); // Remove the anchor from the DOM
  };

  
  

  return (
    <>
      <Head>
        <title>Youtube Thumbnail Downloader</title>
        <meta name="description" content="Download high-quality YouTube video thumbnails effortlessly with our free youtube Thumbnail Downloader tool." />
        <meta name="keywords" content="Youtube Thumbnail Downloader,free Youtube Thumbnail Downloader,Youtube Thumbnail grabber,Downloader  Youtube Thumbnail free ,Downloader thumbnails, download high quality thumbnails, download high quality video thumbnails from YouTube video" />
      </Head>
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Youtube Thumbnail Downloader</h1>
        <h2 className="text-gray-600">Download youtube thumbnail Images  of all quality. This app lets you to download HD thumbnail images for free.</h2>
        
      </div>

      <div className="flex flex-wrap px-0">
        
        <div style={{ width: '300px', height: '250px' }}>
          <div dangerouslySetInnerHTML={{ __html: `
            <script type="text/javascript">
              atOptions = {
                'key': 'f92ccb91f88f4a56bb0199822fdc6715',
                'format': 'iframe',
                'height': 250,
                'width': 300,
                'params': {}
              };
              document.write('<scr' + 'ipt type="text/javascript" src="//www.profitablecreativeformat.com/f92ccb91f88f4a56bb0199822fdc6715/invoke.js"></scr' + 'ipt>');
            </script>
          ` }} />
        </div>
        
        <div className="text-center ml-8 mr-8 mt-5 mb-5">
          <input
            type="text"
            className="w-full md:w-1/2 px-4 py-2 border rounded"
            placeholder="Enter YouTube URL"
            value={videoURL}
            onChange={(e) => setVideoURL(e.target.value)}
          />
          <button className="btn-blue mt-2" onClick={() => getYouTubeThumbnail(videoURL)}>
            Download Thumbnails
          </button>
        </div>

        <div style={{ width: '300px', height: '250px' }}>
          <div dangerouslySetInnerHTML={{ __html: `
            <script type="text/javascript">
              atOptions = {
                'key': 'f92ccb91f88f4a56bb0199822fdc6715',
                'format': 'iframe',
                'height': 250,
                'width': 300,
                'params': {}
              };
              document.write('<scr' + 'ipt type="text/javascript" src="//www.profitablecreativeformat.com/f92ccb91f88f4a56bb0199822fdc6715/invoke.js"></scr' + 'ipt>');
            </script>
          ` }} />
        </div>

      </div>


      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <button className="btn-blue mt-2" onClick={() => downloadImage(option.url)}>
                  Download Image
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
       <div className="mt-8">
    <h2 className="text-xl font-semibold mb-4">How to Download YouTube Thumbnail for free:</h2>
    <h3 className="mb-4">
      Using our Free YouTube Thumbnail Downloader is easy! Follow these simple steps:
    </h3>
    <ol className="list-decimal pl-6">
      <li>
        Copy the URL of the YouTube video you want to extract a thumbnail from.
      </li>
      <li>
        Paste the copied URL into the input field above.
      </li>
      <li>
        Click the "Download Thumbnails" button.
      </li>
      <li>
        You will see a list of available thumbnail options. Click the "Download Image" button
        beneath the thumbnail you want to save.
      </li>
      <li>
        The thumbnail image will be downloaded to your device.
      </li>
    </ol>
    <h2 className="mt-4">
      Now you can easily access high-quality thumbnails from your favorite YouTube videos!
    </h2>
  </div>

    </div>
    </>
  );
};

export default Index;
