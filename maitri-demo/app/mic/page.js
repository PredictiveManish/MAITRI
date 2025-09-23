"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function MicPage() {
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const router = useRouter();

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
      setAudioUrl(URL.createObjectURL(audioBlob));
      audioChunksRef.current = [];
    };

    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 gap-4">
      <h1 className="text-2xl font-bold mb-4">🎤 Mic Recorder</h1>

      {!recording && <button onClick={startRecording} className="bg-blue-600 text-white px-4 py-2 rounded">Start Recording</button>}
      {recording && <button onClick={stopRecording} className="bg-red-600 text-white px-4 py-2 rounded">Stop Recording</button>}

      {audioUrl && <audio src={audioUrl} controls className="mt-4" />}

      <button onClick={() => router.push("/")} className="mt-6 bg-gray-600 text-white px-4 py-2 rounded">
        ⬅️ Back Home
      </button>
    </div>
  );
}
