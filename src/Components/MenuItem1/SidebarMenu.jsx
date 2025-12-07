const menuItems = [
  "2025 Vs 2047",
  "We Transform Agriculture",
  "Crop Loan Waiver Success Stories",
  "Natural Farming Success Stories",
  "Rythu Bharosa Success Stories",
  "Rythu Bima Success Stories",
  "Soil Health Cards Success Stories",
 
];

export default function SidebarMenu({ activeIndex, setActiveIndex }) {
  return (
    <div className="h-full overflow-y-scroll pr-2 custom-scrollbar">
      <div className="flex flex-col gap-2 w-full">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-full py-4 text-lg font-semibold rounded-md 
            ${
              activeIndex === idx
                ? "bg-green-600 text-white shadow-lg"
                : "bg-green-700 text-white/90 hover:bg-green-600"
            } 
            transition`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
