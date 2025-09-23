"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [emotion, setEmotion] = useState("");
  const [response, setResponse] = useState("");
  const router = useRouter();

  const handleAudioUpload = () => {
    router.push("/mic"); // Navigate to Mic page
  };

  const handleCameraCapture = () => {
    router.push("/camera"); // Navigate to Camera page
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col items-center justify-center text-white font-mono tracking-wide"
      style={{ backgroundImage: "url('/bas-bg.jpg')" }}
    >
      <div className="bg-black/40 backdrop-blur-lg p-8 rounded-3xl shadow-2xl text-center max-w-lg border border-gray-700/50">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
          🛰️ MAITRI – AI Assistant
        </h1>
        <p className="mb-8 text-gray-300">
          Your psychological & physical well-being companion in space
        </p>

        <div className="flex flex-col gap-5">
          <button
            onClick={handleAudioUpload}
            className="relative overflow-hidden bg-blue-600/80 hover:bg-blue-700 px-8 py-4 rounded-full shadow-lg border border-blue-400/30 transition-all duration-300 hover:shadow-blue-500/40"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 opacity-20 blur-lg animate-pulse"></span>
            🎤 Upload / Record Audio
          </button>

          <button
            onClick={handleCameraCapture}
            className="relative overflow-hidden bg-green-600/80 hover:bg-green-700 px-8 py-4 rounded-full shadow-lg border border-green-400/30 transition-all duration-300 hover:shadow-green-500/40"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-700 opacity-20 blur-lg animate-pulse"></span>
            📷 Open Camera
          </button>
        </div>

        <div className="mt-8 p-5 bg-gray-900/70 rounded-2xl border border-gray-600/40 shadow-inner text-left">
          <h2 className="text-xl font-semibold text-gray-200">
            Detected Emotion:
          </h2>
          <p className="text-yellow-400 text-3xl font-bold mt-1 tracking-widest">
            {emotion || "—"}
          </p>

          <h2 className="text-xl font-semibold text-gray-200 mt-4">
            Supportive Response:
          </h2>
          <p className="text-green-400 text-lg mt-1 italic">
            {response || "Awaiting input…"}
          </p>
        </div>
      </div>
    </div>
  );
}
