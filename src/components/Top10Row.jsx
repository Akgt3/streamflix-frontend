import React from "react";


function Top10Row({ title, items, onItemClick }) {
  return (
    <section className="py-8 overflow-hidden bg-[#0b0b0b]">
      <div className="px-6 md:px-16">

        {/* TITLE */}
        <h2 className="text-white text-xl font-semibold mb-6">
          {title}
        </h2>

        {/* ROW */}
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-4">

            {items.map((item, index) => (
              <div
                key={index}
                className="relative min-w-[180px] h-[270px]"
              >
                {/* BIG NUMBER */}
                <span
                  className="
                    absolute -left-14 top-1/2 -translate-y-1/2
                    text-[220px]
                    font-extrabold
                    leading-none
                    text-transparent
                    select-none
                    pointer-events-none
                    z-0
                  "
                  style={{
                    WebkitTextStroke: "3px rgba(255,255,255,0.35)",
                  }}
                >
                  {index + 1}
                </span>

                {/* POSTER */}
                {/* POSTER */}
                <div
                  className="
    relative z-10 h-full rounded overflow-hidden
    transform-gpu
    transition-transform duration-500 ease-out
    hover:scale-105
    will-change-transform
  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    onClick={() => onItemClick(item)}
                    className="w-full h-full object-cover cursor-pointer"
                  />

                  {/* BADGE — UNCHANGED */}
                  <span className="absolute bottom-2 left-2 bg-red-600 text-white text-[11px] px-2 py-[2px] rounded">
                    Recently added
                  </span>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Top10Row;
