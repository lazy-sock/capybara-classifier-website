import { useState, useEffect } from "react";
import Footer from "./Footer";

export default function Cam() {
  const [streamUrl, setStreamUrl] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [streamReady, setStreamReady] = useState<boolean>(false);

  useEffect(() => {
    const url = "http://192.168.0.236:81/stream"; // ESP32-CAM MJPEG stream
    setStreamUrl(url);
  }, []);

  const handleImageLoad = () => {
    setStreamReady(true);
    setError(null);
  };

  const handleImageError = () => {
    setStreamReady(false);
    setError("Could not load camera stream");
  };

  return (
    <>
      <div className="camera-stream-container flex flex-col items-center justify-center p-4">
        {/* Placeholder or error */}
        {!streamReady && (
          <div className="bg-primary flex aspect-video w-full max-w-md items-center justify-center rounded-lg text-white shadow-inner">
            {error ? (
              <div className="px-4 text-center">{error}</div>
            ) : (
              <div className="px-4 text-center">Connecting to camera...</div>
            )}
          </div>
        )}

        {/* Actual stream, hidden until loaded */}
        {streamUrl && (
          <img
            src={streamUrl}
            alt="ESP32-CAM Stream"
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`w-full max-w-md rounded-lg shadow-lg transition-opacity duration-500 ${
              streamReady
                ? "opacity-100"
                : "pointer-events-none absolute opacity-0"
            }`}
          />
        )}
      </div>
    </>
  );
}
