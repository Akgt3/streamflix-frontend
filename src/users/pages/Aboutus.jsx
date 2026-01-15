import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Aboutus() {
  return (
    <>
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#0b0b0b] pt-35 pb-16">
        <div className="px-6 md:px-16 max-w-6xl mx-auto">

          <div className="max-w-3xl text-white">

            <p className="uppercase text-xs tracking-[0.25em] text-gray-400 mb-2">
              About StreamFlix
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
              Curated Cinema for Modern Streaming
            </h1>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              StreamFlix is a modern streaming platform built for audiences who value
              strong storytelling, cinematic visuals, and a smooth viewing experience.
              Our focus is simple — bringing quality cinema into one refined destination.
            </p>

          </div>

        </div>
      </section>
      {/* ================= CONTENT SECTION ================= */}
      <section className="bg-[#0b0b0b] py-20">
        <div className="px-6 md:px-16 max-w-6xl mx-auto text-gray-300 space-y-16">

          {/* WHAT WE STREAM */}
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              What We Stream
            </h2>
            <p className="max-w-4xl">
              StreamFlix currently focuses exclusively on movies, carefully
              curated across genres that audiences love — action, drama,
              thrillers, sci-fi, horror, romance, and more.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              {["English", "Hindi", "Malayalam", "Tamil"].map((lang) => (
                <span
                  key={lang}
                  className="px-4 py-2 rounded-full bg-white/10 text-white text-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* OUR VISION */}
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Our Vision
            </h2>
            <p className="max-w-4xl">
              We believe entertainment should feel personal, immersive, and
              effortless. Our long-term vision is to evolve StreamFlix into a
              complete digital entertainment ecosystem.
            </p>
            <p className="mt-4 max-w-4xl">
              As the platform grows, StreamFlix will expand beyond movies to
              include high-quality web series and original digital content —
              designed for modern viewers across devices.
            </p>
          </div>

          {/* WHY STREAMFLIX */}
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
              Why StreamFlix
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-white font-semibold text-lg mb-2">
                  Curated Content
                </h3>
                <p className="text-gray-400 text-sm">
                  We prioritize quality over quantity, focusing on content that
                  delivers strong storytelling and cinematic value.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-white font-semibold text-lg mb-2">
                  Multi-Language Focus
                </h3>
                <p className="text-gray-400 text-sm">
                  Stories across English, Hindi, Malayalam, and Tamil — bringing
                  cultures together through cinema.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-white font-semibold text-lg mb-2">
                  Modern Experience
                </h3>
                <p className="text-gray-400 text-sm">
                  A clean interface, smooth navigation, and performance-focused
                  design inspired by top OTT platforms.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-white font-semibold text-lg mb-2">
                  Future-Ready Platform
                </h3>
                <p className="text-gray-400 text-sm">
                  Built with scalability in mind — ready for new formats,
                  features, and content types.
                </p>
              </div>
            </div>
          </div>

          {/* CLOSING */}
          <div className="pt-10 border-t border-white/10">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Our Promise
            </h2>
            <p className="max-w-4xl text-gray-300">
              To deliver entertainment that feels premium, purposeful, and
              personal — today and into the future.
            </p>

            <p className="mt-4 text-white font-semibold">
              Welcome to StreamFlix.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Aboutus;
