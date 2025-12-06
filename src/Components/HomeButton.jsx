import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function HomeButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/")}
      className="flex items-center bg-green-700 px-4 py-2 rounded-full gap-2 text-lg shadow-lg"
    >
      <FaHome /> Home
    </button>
  );
}
