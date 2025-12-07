import React, { useState } from "react";

import BackButton from "../BackButton";
import HomeButton from "../HomeButton";

import BgImage from "../../assets/Agri Dept 12 Slides 2025 Vs 2047/lush-rice-paddy-field-neat-600nw-2499404003.webp";
import SidebarMenu3 from "./SidebarMenu";
import contentData3 from "./contentData";
import ContentArea3 from "./ContentArea";



export default function FocusAreaPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [history, setHistory] = useState([]);

  const handleMenuClick = (index) => {
    setHistory((prev) => [...prev, activeIndex]); // save previous item
    setActiveIndex(index);
  };

  const handleBack = () => {
    if (history.length > 0) {
      const lastIndex = history[history.length - 1];
      setHistory((prev) => prev.slice(0, -1)); // remove last
      setActiveIndex(lastIndex);               // go back to it
    }
  };

  return (
    <div className="relative w-full h-screen text-white overflow-hidden">

      {/* Background Image */}
      <img
        src={BgImage}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover brightness-75 -z-10"
      />

      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 w-full h-screen">

        {/* Sidebar (scroll only this) */}  
         {/* Sidebar */}
        <div className="col-span-3 lg:col-span-2 bg-green-800/70 backdrop-blur-sm p-3 overflow-y-auto">
          <SidebarMenu3 activeIndex={activeIndex} setActiveIndex={handleMenuClick} />
        </div>

        {/* Content */}
        <div className="col-span-9 lg:col-span-10 p-6 relative"> 

          {/* Sticky Buttons */}
          {/* <div className="fixed flex gap-6 top-4 right-6 z-20">
            <BackButton onBack={handleBack} />
            <HomeButton />
          </div> */}

          {/* Content area - not scrollable */}
    <div className=" h-[calc(100vh-100px)] overflow-y-auto pr-4">
  <ContentArea3 content={contentData3[activeIndex]} />
</div>

        </div>
      </div>
      <div className="fixed flex justify-end gap-6 bottom-4 right-6 left-1/4 lg:left-[25%] pr-6 z-20">
        <BackButton onBack={handleBack} />
        <HomeButton />
      </div>
    </div>
  );
}
 