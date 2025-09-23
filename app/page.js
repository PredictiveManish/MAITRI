"use client";
import {useState} from "react";

export default function Home(){
    const [emotion, setEmotion] = useState("");
    const [response, setResponse] = useState("");

    const handleAudioUpload = () => {
        setEmotion("Calm");
        setResponse("You're doing great, keep yourself focused!! Whenever you feel worried, start remembering parents and wife!");
    };
    const handleCameraCapture = () => {
        setEmotion("Stressed");
        setResponse("Take a deep breath, relax, you're not alone, your family is in your heart!");

    };

    return (
         <div
      className="h-screen w-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('/bas-bg.jpg')" }} // add BAS image in /public folder
    >
      <div className="bg-black/60 p-6 rounded-2xl shadow-lg text-center max-w-lg">
        <h1 className="text-3xl font-bold mb-4">🛰️ MAITRI – AI Assistant</h1>
        <p className="mb-6">Your psychological & physical well-being companion in space</p>

        <div className="flex flex-col gap-4">
          <button
            onClick={handleAudioUpload}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg shadow-md"
          >
            🎤 Upload / Record Audio
          </button>

          <button
            onClick={handleCameraCapture}
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg shadow-md"
          >
            📷 Open Camera
          </button>
        </div>

        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <h2 className="text-xl font-semibold">Detected Emotion:</h2>
          <p className="text-yellow-400 text-2xl">{emotion || "—"}</p>
          <h2 className="text-xl font-semibold mt-3">Supportive Response:</h2>
          <p className="text-green-400">{response || "Awaiting input…"}</p>
        </div>
      </div>
    </div>
  );

}