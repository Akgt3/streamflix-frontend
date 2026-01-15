import React from "react";

const studios = [
  { name: "Hotstar", logo: "/st/st1.avif" },
  { name: "Disney+", logo: "/st/st2.avif" },
  { name: "HBO", logo: "/st/st3.avif" },
  { name: "Peacock", logo: "/st/st4.avif" },
  { name: "Paramount+", logo: "/st/st5.avif" },
];

function Studios() {
  return (
    <section className="bg-[#0b0b0b] px-6 md:px-16 py-16">

      {/* Title */}
      <h2 className="text-lg md:text-xl font-semibold text-white mb-6">
        Studios
      </h2>

      {/* Images Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center">
        {studios.map((studio, index) => (
          <img
            key={index}
            src={studio.logo}
            alt={studio.name}
            className="
              w-full h-auto rounded-xl
              transition-transform duration-300
              hover:scale-105
            "
          />
        ))}
      </div>
    </section>
  );
}

export default Studios;
