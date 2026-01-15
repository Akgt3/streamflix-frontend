import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


function Row({ title, posters, onPosterClick }) {
  const rowRef = useRef(null);

  const scrollLeft = () => {
    rowRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-6 md:px-16 mb-8">
      {/* Row Title */}
      <h2 className="text-lg md:text-xl font-semibold text-white mb-4">
        {title}
      </h2>

      {/* Row Wrapper */}
      <div className="relative group">

        {/* LEFT ARROW */}
        <button
          onClick={scrollLeft}
          className="
            hidden md:flex
            absolute left-0 top-1/2 -translate-y-1/2
            z-10
            w-10 h-10
            items-center justify-center
            bg-black/60 hover:bg-black/80
            text-white
            rounded-full
            opacity-0 group-hover:opacity-100
            transition
          "
        >
          <FiChevronLeft size={24} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={scrollRight}
          className="
            hidden md:flex
            absolute right-0 top-1/2 -translate-y-1/2
            z-10
            w-10 h-10
            items-center justify-center
            bg-black/60 hover:bg-black/80
            text-white
            rounded-full
            opacity-0 group-hover:opacity-100
            transition
          "
        >
          <FiChevronRight size={24} />
        </button>

        {/* SCROLL CONTAINER */}
        <div
          ref={rowRef}
          className="
    flex gap-4
    overflow-x-auto
    scrollbar-hide
    scroll-smooth
    pr-4
  "
        >
          {posters.map((img, index) => (
            <div
              className="
    min-w-[150px] md:min-w-[180px]
    aspect-[2/3]
    rounded-lg
    overflow-hidden
  "
            >
              <img
                src={img}
                alt=""
                onClick={() => onPosterClick(img)}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Row;


