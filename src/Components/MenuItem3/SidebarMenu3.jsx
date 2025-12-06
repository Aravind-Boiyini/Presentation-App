const menuItems = [
  "Schemes and Subsidies",
  
  "Oil palm scenario in Telangana",
    "Oil Palm FFB price trends (Graph)",
  "COEs and Horticulture Farms",
  "Inventory of Post Harvest infrastructure in Telangana",
  "Success Stories –MIDH",
  "Success Stories - Pandals for Vegetables",
  "Success Stories – Oil Palm",
  "Success Stories – Micro Irrigation",
  "Success Stories – Sericulture",
  "Cold Storages in Telangana",
];

export default function SidebarMenu3({ activeIndex, setActiveIndex }) {
  return (
    <div className="h-full overflow-y-scroll pr-2 custom-scrollbar">
      <div className="flex flex-col gap-2 w-full">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-full py-4 text-lg p-2 font-semibold rounded-md 
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
