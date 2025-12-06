export default function ContentArea3({ content }) {
  const safeContent = content;

  return (
    <div className="bg-green-900/60 p-6 rounded-xl shadow-2xl text-white overflow-y-auto h-full custom-scroll">
      <h2 className="text-3xl font-bold mb-8">{safeContent.title}</h2>

      <div className="space-y-12">
        {safeContent.sections.map((section, idx) => (
          <div key={idx} className="space-y-8">
            {/* Text content - always full width */}
            {section.paragraph && (
              <div className="w-full ">
                <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
                  {section.paragraph}
                </p>
              </div>
            )}

            {/* Full screen centered image */}
           {section.image && (
  <div className="w-full flex justify-center">
    {/* Use a max width and auto height; keep aspect ratio */}
    <div className="max-w-[1440px] w-full">
      <img
        src={section.image}
        className="w-full h-auto rounded-lg shadow-2xl object-contain bg-black"
        alt={section.imageCaption || ""}
      />
      {section.imageCaption && (
        <p className="text-sm text-gray-200 italic mt-4 text-center">
          {section.imageCaption}
        </p>
      )}
    </div>
  </div>
)}
          </div>
        ))}
      </div>
    </div>
  );
}
