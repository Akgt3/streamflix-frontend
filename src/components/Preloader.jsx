import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Preloader() {
  const preloaderRef = useRef(null);

  useEffect(() => {
    if (!preloaderRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" }
      });

      /* LETTER REVEAL */
      tl.to(".logo-group span", {
        opacity: 1,
        y: 0,
        stagger: 0.06,
        duration: 0.8
      });

      /* LOADING LINE */
      tl.to(".line", {
        width: "100%",
        duration: 2,
        ease: "power2.inOut"
      });

      /* BRAND EXIT */
      tl.to(".brand", {
        opacity: 0,
        y: -20,
        duration: 0.6
      });

      /* PRELOADER FADE OUT */
      tl.to(preloaderRef.current, {
        opacity: 0,
        duration: 0.5
      });
    }, preloaderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="brand">
        {/* LOGO */}
        <div className="logo">
          <div className="logo-group stream">
            <span>S</span>
            <span>T</span>
            <span>R</span>
            <span>E</span>
            <span>A</span>
            <span>M</span>
          </div>

          <div className="logo-group flix">
            <span>F</span>
            <span>L</span>
            <span>I</span>
            <span>X</span>
          </div>
        </div>

        {/* LOADING LINE */}
        <div className="line-track">
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
