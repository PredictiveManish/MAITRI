"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function CameraPage() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const router = useRouter();

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error("Error accessing camera: ", err);
    }
  };

  const capturePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 320, 240);
    const dataUrl = canvasRef.current.toDataURL("image/png");
    setPhoto(dataUrl);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 gap-4">
      <h1 className="text-2xl font-bold mb-4">📷 Camera Capture</h1>

      <video ref={videoRef} autoPlay width="320" height="240" className="mb-2 border" />
      <div className="flex gap-2">
        <button onClick={startCamera} className="bg-green-600 text-white px-4 py-2 rounded">Open Camera</button>
        <button onClick={capturePhoto} className="bg-blue-600 text-white px-4 py-2 rounded">Capture Photo</button>
      </div>

      <canvas ref={canvasRef} width="320" height="240" style={{ display: "none" }} />
      {photo && <img src={photo} alt="Captured" className="mt-4 border" />}

      <button onClick={() => router.push("/")} className="mt-6 bg-gray-600 text-white px-4 py-2 rounded">
        ⬅️ Back Home
      </button>
    </div>
  );
}
