import { useState } from "react";
import Nav from "./nav";




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
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Youtube Thumbnail Downloader</h1>
        <p className="text-gray-600">Download high-quality thumbnails from YouTube videos.</p>
      </header>
      <div className="text-center">
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
    <h2 className="text-xl font-semibold mb-4">How to Use:</h2>
    <p className="mb-4">
      Using our Free YouTube Thumbnail Downloader is easy! Follow these simple steps:
    </p>
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
    <p className="mt-4">
      Now you can easily access high-quality thumbnails from your favorite YouTube videos!
    </p>
  </div>

    </div>
  );
};

export default Index;
