const menuItems = [
  "PROFESSOR JAYASHANKAR TELANGANA AGRICULTURAL UNIVERSITY",

];

export default function SidebarMenu2({ activeIndex, setActiveIndex }) {
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
