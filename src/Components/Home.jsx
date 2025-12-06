import React from "react";
import Logo1 from "../assets/Agri Dept 12 Slides 2025 Vs 2047/WhatsApp Image 2025-12-05 at 18.52.34_dfcb594e.jpg";
import Logo2 from "../assets/Ellipse 2.png";
import BackgroundImage from "../assets/Desktop - 5.png";
import { useNavigate } from "react-router-dom";
import hortilogo from '../assets/Micro Irrigation Success stories (Revised)[1]/oil-palms-plantation-tropical-jungle-phang-nga-thailand-photo.jpg';
import Agrilogo from '../assets/Agri Dept 12 Slides 2025 Vs 2047/SustainableFarming_Lead.webp';
import AgriUnilogo from '../assets/Agri Dept 12 Slides 2025 Vs 2047/hyderabads-prof-jayashankar-agricultural-university-to-conduct-exams-through-vc.avif';
import hortiunilogo from '../assets/Agri Dept 12 Slides 2025 Vs 2047/img_2.jpg';

export default function Home() {
  const navigate = useNavigate();

  // Four separate menu items
  const menuItems = [
    { id: 1, name: "Agriculture Department", path: "/sence-1", icon: Agrilogo },
    { id: 2, name: "Agriculture university", path: "/sence-2", icon: AgriUnilogo },
    { id: 3, name: "Horticulture Departemnt", path: "/sence-3", icon:hortilogo },
    { id: 4, name: "Horticulture university", path: "/sence-4", icon:hortiunilogo },
  ];

  return (
    <div className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-between text-white p-4">
      <img
        src={BackgroundImage}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Top Logos */}
      <div className="w-full flex justify-between items-start px-4 pt-4">
        <img
          src={Logo1}
          alt="Left Logo"
          className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-2xl"
        />
        <img
          src={Logo2}
          alt="Right Logo"
          className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-2xl"
        />
      </div>

      {/* Main Header */}
      <div className="text-center mt-6 md:mt-10">
        <h1 className="text-4xl md:text-7xl font-extrabold drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)] tracking-wide">
          Telangana Rising Vision 2047
        </h1>
        <p className="text-2xl md:text-5xl font-bold mt-3 drop-shadow-[0_3px_15px_rgba(0,0,0,0.8)]">
         Global Sumbit 2025
        </p>
        <p className="text-2xl md:text-2xl font-semibold mt-3 drop-shadow-[0_3px_15px_rgba(0,0,0,0.8)]">
          Agricultural and co-operation department 
Govt.of Telangana
        </p>
      </div>

      {/* Center Title */}
      <div className="text-center mt-10 md:mt-16">
        <h2 className="text-4xl md:text-6xl font-extrabold drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
          FARMERS EMPOWERMENT
        </h2>
      </div>

      {/* Separate Menu Buttons */}
     <div className="flex flex-wrap justify-center gap-10 mb-16 mt-10">
        {menuItems.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <button
              className="w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center bg-gradient-to-b from-green-500 to-green-800 shadow-[0_12px_35px_rgba(0,0,0,0.45)] hover:scale-110 transition-transform **overflow-hidden** p-0" // Add p-0 to remove default padding
              onClick={() => navigate(item.path)}
            >
              {item.icon ? (
                <img
                  src={item.icon}
                  alt={item.name}
                  className="**w-full h-full rounded-full object-cover**" // 👈 CRITICAL CHANGE
                />
              ) : (
                // Fallback text/icon if no image is provided for other buttons
                <span className="text-xl font-bold">{item.name.split(' ')[0]}</span>
              )}
            </button>

            <p className="mt-3 text-lg font-semibold drop-shadow-md text-center w-40">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
