import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center">
      <div className="flex items-center space-x-4 mb-4">
        <img src={viteLogo} alt="Vite Logo" className="h-20" />
        <img src={reactLogo} alt="React Logo" className="h-20 animate-spin-slow" />
      </div>
      <h1 className="text-2xl font-bold">Welcome to Vite + React + Tailwind Starter</h1>
      <p className="text-gray-400 mt-2">Get started by editing <code className="bg-gray-800 px-2 py-1 rounded">App.jsx</code></p>
    </div>
  );
}

export default App;
