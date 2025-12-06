import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton({ onBack }) {
  return (
    <button
      onClick={onBack}
      className="flex items-center gap-2 bg-green-700 px-4 py-2 rounded-full text-white text-lg shadow-lg"
    >
      <FaArrowLeft /> Back
    </button>
  );
}
