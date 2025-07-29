import React, { useState, useRef } from "react";
import * as ort from "onnxruntime-web";

// Configure WASM paths to use CDN
ort.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/";

const ImageClassifier: React.FC = () => {
  const [result, setResult]: any = useState([]);
  const classes: string[] = [
    "Amsel",
    "Blaumeise",
    "Buchfink",
    "Buntspecht",
    "Elster",
    "Feldsperling",
    "Gimpel",
    "Kohlmeise",
    "Rabe",
    "Rotkehlchen",
    "Eichhörnchen",
  ];

  const classifyImage = async (imageFile: File) => {
    setImageURL(URL.createObjectURL(imageFile));

    // Load model
    const session = await ort.InferenceSession.create(
      "/models/bird_classifier_web.onnx",
    );

    // Preprocess image
    const img = new Image();
    img.src = URL.createObjectURL(imageFile);
    await img.decode();

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    canvas.width = 224;
    canvas.height = 224;
    ctx.drawImage(img, 0, 0, 224, 224);

    const imageData = ctx.getImageData(0, 0, 224, 224);
    const input = new Float32Array(3 * 224 * 224);

    // Convert RGBA to RGB and normalize
    for (let i = 0; i < 224 * 224; i++) {
      input[i] = (imageData.data[i * 4] / 255 - 0.485) / 0.229; // R
      input[224 * 224 + i] = (imageData.data[i * 4 + 1] / 255 - 0.456) / 0.224; // G
      input[2 * 224 * 224 + i] =
        (imageData.data[i * 4 + 2] / 255 - 0.406) / 0.225; // B
    }

    // Run inference
    const tensor = new ort.Tensor("float32", input, [1, 3, 224, 224]);
    const outputs = await session.run({ image: tensor });

    // Check available outputs
    console.log("Available outputs:", Object.keys(outputs));
    const outputName = Object.keys(outputs)[0]; // Use first output
    const predictions = outputs[outputName].data as Float32Array;

    // Get top prediction
    const maxIndex = predictions.indexOf(Math.max(...predictions));
    setResult([maxIndex, predictions[maxIndex].toFixed(3)]);
    setSelectedWindow("result");
  };

  const [imageURL, setImageURL] = useState<string | null>(null);
  const [selectedWindow, setSelectedWindow] = useState<string>("picture");

  // Hidden file input
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
      classifyImage(file);
    }
  };

  return (
    <div className="mx-auto w-full max-w-[600px] rounded-xl border-6 p-4 shadow-lg">
      <h2 className="mb-4 text-center text-2xl font-semibold">
        Bird Image Classifier
      </h2>
      <div className="flex gap-6 max-lg:flex-col">
        <div className="flex h-[400px] w-full items-center justify-center rounded-xl bg-white p-2 text-black dark:text-black">
          {selectedWindow == "picture" ? (
            <div>
              <button
                onClick={handleClick}
                className="flex flex-col items-center hover:cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width={60}
                  className="fill-black dark:fill-black"
                >
                  <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                </svg>

                <p className="mx-auto text-[1.2rem] font-semibold">
                  Select an Image
                </p>
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          ) : (
            <h3 className="mt-4 text-2xl">{classes[result[0]]}</h3>
          )}
        </div>
        <div className="flex justify-center gap-6 lg:flex-col">
          <button
            onClick={() => setSelectedWindow("picture")}
            className="text- flex h-[100px] w-[150px] cursor-pointer items-center justify-center rounded-xl bg-white bg-cover text-black"
            style={{
              backgroundImage: imageURL ? `url(${imageURL})` : undefined,
            }}
          >
            {imageURL ? <div></div> : "Select Image"}
          </button>
          <button
            onClick={() => setSelectedWindow("result")}
            className="text- flex h-[100px] w-[150px] cursor-pointer items-center justify-center rounded-xl bg-white text-black"
          >
            {result.length > 0
              ? `${classes[result[0]]} (${result[1]})`
              : "Classify"}
          </button>
          <button className="text- flex h-[100px] w-[150px] cursor-pointer items-center justify-center rounded-xl bg-white text-black">
            Attention Map
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageClassifier;
