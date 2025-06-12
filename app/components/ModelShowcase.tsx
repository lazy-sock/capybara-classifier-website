import { useEffect, useState } from "react";
import * as ort from "onnxruntime-web";

export default function ModelShowcase() {
  const [output, setOutput] = useState<number[] | null>(null);

  useEffect(() => {
    const runModel = async () => {
      // Configure WASM path
      ort.env.wasm.wasmPaths = "/";

      const session = await ort.InferenceSession.create(
        "/models/bird_classifier_web.onnx",
      );

      const input = new ort.Tensor(
        "float32",
        new Float32Array([1, 2, 3]),
        [1, 3],
      );
      const feeds = { input };

      const results = await session.run(feeds);
      const outputTensor = results[Object.keys(results)[0]];
      setOutput(Array.from(outputTensor.data as Float32Array));
    };
    runModel().catch(console.error);
  }, []);

  return (
    <div className="p-4 text-center">
      <h1 className="mb-2 text-lg font-bold">ONNX Runtime Demo</h1>
      {output ? (
        <div className="text-green-600">Output: {output.join(", ")}</div>
      ) : (
        <div className="text-gray-500">Running model...</div>
      )}
    </div>
  );
}
