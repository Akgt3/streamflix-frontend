import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Row from "../../components/Row";
import MoviePreview from "../../components/MoviePreview";


export const movieMeta = {
  "/m/m1.jpg": {
    image: "/m/m1.jpg",
    title: "Ready Player One",
    rating: "U/A 16+",
    duration: "2h 16m",
    genres: ["Sci-fi", "Adventure", "Action"],
    description:
      "When the creator of a virtual reality world called OASIS dies, he leaves a challenge behind. Hidden inside the virtual world is an Easter Egg, which grants a worthy person total control over OASIS.",
    video: "/ready-player-one-trailer.mp4",
  },
  "/m/m2.jpg": {
    image: "/m/m2.jpg",
    title: "Money Heist",
    rating: "18+",
    duration: "1h 58m",
    genres: ["crime", "thriller"],
    description:
      "A criminal mastermind assembles a team to pull off the biggest heist in history."
  },
  "/m/m3.jpg": {
    image: "/m/m3.jpg",
    title: "inception",
    rating: "u/a 13+",
    duration: "2h 28m",
    genres: ["sci-fi", "thriller"],
    description: "a skilled thief enters dreams to steal secrets, where reality bends and time collapses."
  },

  "/m/m4.webp": {
    image: "/m/m4.webp",
    title: "interstellar",
    rating: "u/a 13+",
    duration: "2h 49m",
    genres: ["sci-fi", "drama"],
    description: "a journey through space and time to save humanity from extinction."
  },

  "/m/m5.jpg": {
    image: "/m/m5.jpg",
    title: "joker",
    rating: "18+",
    duration: "2h 2m",
    genres: ["crime", "drama"],
    description: "a mentally troubled man descends into chaos and becomes an icon of rebellion."
  },

  "/m/m6.jpg": {
    image: "/m/m6.jpg",
    title: "the dark knight",
    rating: "u/a 13+",
    duration: "2h 32m",
    genres: ["action", "crime"],
    description: "batman faces the joker in a battle for gotham’s soul."
  },

  "/m/m7.jpg": {
    image: "/m/m7.jpg",
    title: "avatar",
    rating: "u/a 13+",
    duration: "2h 42m",
    genres: ["fantasy", "adventure"],
    description: "a marine embraces an alien world and fights to protect it."
  },

  "/m/m8.webp": {
    image: "/m/m8.webp",
    title: "gladiator",
    rating: "18+",
    duration: "2h 35m",
    genres: ["action", "drama"],
    description: "a betrayed general rises as a gladiator to seek revenge."
  },

  "/m/m9.jpg": {
    image: "/m/m9.jpg",
    title: "titanic",
    rating: "u/a 13+",
    duration: "3h 14m",
    genres: ["romance", "drama"],
    description: "a tragic love story aboard the ill-fated titanic."
  },

  "/m/m10.webp": {
    image: "/m/m10.webp",
    title: "avengers endgame",
    rating: "u/a 13+",
    duration: "3h 1m",
    genres: ["action", "superhero"],
    description: "the avengers assemble for one final battle to restore the universe."
  },

  "/m/m11.jpg": {
    image: "/m/m11.jpg",
    title: "parasite",
    rating: "18+",
    duration: "2h 12m",
    genres: ["thriller", "drama"],
    description: "a dark tale of class divide and hidden intentions."
  },

  "/m/m12.jpg": {
    image: "/m/m12.jpg",
    title: "shawshank redemption",
    rating: "u/a 13+",
    duration: "2h 22m",
    genres: ["drama"],
    description: "hope and friendship survive within prison walls."
  },

  "/m/m13.webp": {
    image: "/m/m13.webp",
    title: "forrest gump",
    rating: "u/a 13+",
    duration: "2h 22m",
    genres: ["drama", "romance"],
    description: "a simple man unknowingly shapes history through kindness."
  },

  "/m/m14.jpg": {
    image: "/m/m14.jpg",
    title: "fight club",
    rating: "18+",
    duration: "2h 19m",
    genres: ["drama", "thriller"],
    description: "an underground fight club evolves into something dangerous."
  },

  "/m/m15.jpg": {
    image: "/m/m15.jpg",
    title: "matrix",
    rating: "u/a 16+",
    duration: "2h 16m",
    genres: ["sci-fi", "action"],
    description: "a hacker discovers the truth behind his reality."
  },

  "/m/m16.webp": {
    image: "/m/m16.webp",
    title: "lord of the rings",
    rating: "u/a 13+",
    duration: "3h 21m",
    genres: ["fantasy", "adventure"],
    description: "a quest to destroy a ring that can doom the world."
  },

  "/m/m17.jpg": {
    image: "/m/m17.jpg",
    title: "pulp fiction",
    rating: "18+",
    duration: "2h 34m",
    genres: ["crime", "drama"],
    description: "interwoven stories of crime, violence, and redemption."
  },

  "/m/m18.jpg": {
    image: "/m/m18.jpg",
    title: "whiplash",
    rating: "u/a 16+",
    duration: "1h 47m",
    genres: ["drama", "music"],
    description: "a young drummer pushed to his limits by a ruthless mentor."
  },

  "/m/m19.jpg": {
    image: "/m/m19.jpg",
    title: "black swan",
    rating: "18+",
    duration: "1h 48m",
    genres: ["thriller", "drama"],
    description: "a dancer’s obsession leads to psychological collapse."
  },

  "/m/m20.jpg": {
    image: "/m/m20.jpg",
    title: "the prestige",
    rating: "u/a 13+",
    duration: "2h 10m",
    genres: ["mystery", "thriller"],
    description: "two magicians engage in a deadly rivalry."
  },

  "/m/m21.jpg": {
    image: "/m/m21.jpg",
    title: "dune",
    rating: "u/a 13+",
    duration: "2h 35m",
    genres: ["sci-fi", "adventure"],
    description: "a young nobleman must protect the most valuable resource in the universe."
  },

  "/m/m22.webp": {
    image: "/m/m22.webp",
    title: "gravity",
    rating: "u/a 13+",
    duration: "1h 31m",
    genres: ["sci-fi", "thriller"],
    description: "astronauts fight for survival after disaster strikes in space."
  },

  "/m/m23.webp": {
    image: "/m/m23.webp",
    title: "the wolf of wall street",
    rating: "18+",
    duration: "3h",
    genres: ["crime", "comedy"],
    description: "the rise and fall of a corrupt stockbroker."
  },

  "/m/m24.jpg": {
    image: "/m/m24.jpg",
    title: "se7en",
    rating: "18+",
    duration: "2h 7m",
    genres: ["crime", "thriller"],
    description: "detectives hunt a serial killer driven by deadly sins."
  },

  "/m/m25.jpg": {
    image: "/m/m25.jpg",
    title: "gone girl",
    rating: "18+",
    duration: "2h 29m",
    genres: ["thriller", "mystery"],
    description: "a marriage turns dark after a mysterious disappearance."
  },

  "/m/m26.webp": {
    image: "/m/m26.webp",
    title: "mad max fury road",
    rating: "u/a 16+",
    duration: "2h",
    genres: ["action", "adventure"],
    description: "a high-octane chase through a post-apocalyptic wasteland."
  },

  "/m/m27.jpg": {
    image: "/m/m27.jpg",
    title: "the revenant",
    rating: "18+",
    duration: "2h 36m",
    genres: ["adventure", "drama"],
    description: "a frontiersman fights for survival against nature."
  },

  "/m/m28.jpg": {
    image: "/m/m28.jpg",
    title: "life of pi",
    rating: "u/a 13+",
    duration: "2h 7m",
    genres: ["adventure", "fantasy"],
    description: "a boy survives at sea with a tiger."
  },

  "/m/m29.jpg": {
    image: "/m/m29.jpg",
    title: "shutter island",
    rating: "u/a 16+",
    duration: "2h 18m",
    genres: ["thriller", "mystery"],
    description: "a marshal uncovers disturbing truths on a remote island."
  },

  "/m/m30.jpg": {
    image: "/m/m30.jpg",
    title: "arrival",
    rating: "u/a 13+",
    duration: "1h 56m",
    genres: ["sci-fi", "drama"],
    description: "linguists attempt to communicate with extraterrestrials."
  },

  "/m/m31.jpg": {
    image: "/m/m31.jpg",
    title: "logan",
    rating: "18+",
    duration: "2h 17m",
    genres: ["action", "drama"],
    description: "an aging mutant protects a young girl in a broken world."
  },

  "/m/m32.jpg": {
    image: "/m/m32.jpg",
    title: "doctor strange",
    rating: "u/a 13+",
    duration: "1h 55m",
    genres: ["fantasy", "superhero"],
    description: "a surgeon learns the mystic arts to protect reality."
  },

  "/m/m33.jpg": {
    image: "/m/m33.jpg",
    title: "batman begins",
    rating: "u/a 13+",
    duration: "2h 20m",
    genres: ["action", "crime"],
    description: "the origin story of the dark knight."
  },

  "/m/m34.jpg": {
    image: "/m/m34.jpg",
    title: "tenet",
    rating: "u/a 13+",
    duration: "2h 30m",
    genres: ["sci-fi", "action"],
    description: "time inversion becomes the key to preventing global annihilation."
  },

  "/m/m35.jpg": {
    image: "/m/m35.jpg",
    title: "edge of tomorrow",
    rating: "u/a 13+",
    duration: "1h 53m",
    genres: ["sci-fi", "action"],
    description: "a soldier relives the same battle again and again."
  },

  "/m/m36.jpg": {
    image: "/m/m36.jpg",
    title: "the social network",
    rating: "u/a 13+",
    duration: "2h",
    genres: ["drama"],
    description: "the creation of facebook and the cost of ambition."
  },

  "/m/m37.webp": {
    image: "/m/m37.webp",
    title: "her",
    rating: "u/a 13+",
    duration: "2h 6m",
    genres: ["romance", "sci-fi"],
    description: "a man falls in love with an artificial intelligence."
  },

  "/m/m38.jpg": {
    image: "/m/m38.jpg",
    title: "ex machina",
    rating: "u/a 16+",
    duration: "1h 48m",
    genres: ["sci-fi", "thriller"],
    description: "a programmer tests the consciousness of an android."
  },

  "/m/m39.jpg": {
    image: "/m/m39.jpg",
    title: "oldboy",
    rating: "18+",
    duration: "2h",
    genres: ["thriller", "mystery"],
    description: "a man seeks revenge after years of captivity."
  },

  "/m/m40.jpg": {
    image: "/m/m40.jpg",
    title: "the lighthouse",
    rating: "18+",
    duration: "1h 49m",
    genres: ["psychological", "drama"],
    description: "two men descend into madness on a remote island."
  },

  "/m/m41.jpg": {
    image: "/m/m41.jpg",
    title: "1917",
    rating: "u/a 13+",
    duration: "1h 59m",
    genres: ["war", "drama"],
    description: "two soldiers race against time during world war i."
  },

  "/m/m42.webp": {
    image: "/m/m42.webp",
    title: "gravity falls",
    rating: "u",
    duration: "1h 30m",
    genres: ["adventure", "animation"],
    description: "a visually stunning survival story in space."
  },

  "/m/m43.jpg": {
    image: "/m/m43.jpg",
    title: "scarface",
    rating: "18+",
    duration: "2h 50m",
    genres: ["crime", "drama"],
    description: "the rise and fall of a ruthless drug lord."
  },

  "/m/m44.jpg": {
    image: "/m/m44.jpg",
    title: "heat",
    rating: "18+",
    duration: "2h 50m",
    genres: ["crime", "action"],
    description: "a cat-and-mouse chase between a detective and a thief."
  },

  "/m/m45.jpg": {
    image: "/m/m45.jpg",
    title: "casino royale",
    rating: "u/a 13+",
    duration: "2h 24m",
    genres: ["action", "spy"],
    description: "james bond faces his first deadly mission."
  },

  "/m/m46.webp": {
    image: "/m/m46.webp",
    title: "skyfall",
    rating: "u/a 13+",
    duration: "2h 23m",
    genres: ["action", "spy"],
    description: "bond’s loyalty is tested when his past returns."
  },

  "/m/m47.jpg": {
    image: "/m/m47.jpg",
    title: "no country for old men",
    rating: "18+",
    duration: "2h 2m",
    genres: ["crime", "thriller"],
    description: "violence follows a man who finds drug money."
  },

  "/m/m48.jpg": {
    image: "/m/m48.jpg",
    title: "prisoners",
    rating: "18+",
    duration: "2h 33m",
    genres: ["thriller", "drama"],
    description: "a desperate father takes justice into his own hands."
  },

  "/m/m49.webp": {
    image: "/m/m49.webp",
    title: "blade runner 2049",
    rating: "u/a 16+",
    duration: "2h 44m",
    genres: ["sci-fi", "neo-noir"],
    description: "a new blade runner uncovers secrets that threaten society."
  },

  "/m/m50.jpg": {
    image: "/m/m50.jpg",
    title: "the departed",
    rating: "18+",
    duration: "2h 31m",
    genres: ["crime", "thriller"],
    description: "an undercover cop and a mole play a deadly game."
  }


};


/* ================= HERO VIDEOS ================= */
const heroVideos = [
  { src: "/net4.mp4", duration: 4000 },
  { src: "/net3.mp4", duration: 4000 },
  { src: "/net2.mp4", duration: 4000 },
  { src: "/net1.mp4", duration: 4000 },
];

/* ================= POSTER ROWS ================= */
const row1 = [
  "/m/m1.jpg", "/m/m2.jpg", "/m/m3.jpg", "/m/m4.webp",
  "/m/m5.jpg", "/m/m6.jpg", "/m/m7.jpg", "/m/m8.webp", "/m/m9.jpg", "/m/m10.webp",
];

const row2 = [
  "/m/m11.jpg", "/m/m12.jpg", "/m/m13.webp", "/m/m14.jpg",
  "/m/m15.jpg", "/m/m16.webp", "/m/m17.jpg", "/m/m18.jpg", "/m/m19.jpg", "/m/m20.jpg",
];

const row3 = [
  "/m/m21.jpg", "/m/m22.webp", "/m/m23.webp", "/m/m24.jpg",
  "/m/m25.jpg", "/m/m26.webp", "/m/m27.jpg", "/m/m28.jpg", "/m/m29.jpg", "/m/m30.jpg",
];

const row4 = [
  "/m/m31.jpg", "/m/m32.jpg", "/m/m33.jpg", "/m/m34.jpg",
  "/m/m35.jpg", "/m/m36.jpg", "/m/m37.webp", "/m/m38.jpg", "/m/m39.jpg", "/m/m40.jpg",
];

const row5 = [
  "/m/m41.jpg", "/m/m42.webp", "/m/m43.jpg", "/m/m44.jpg",
  "/m/m45.jpg", "/m/m46.webp", "/m/m47.jpg", "/m/m48.jpg", "/m/m49.webp", "/m/m50.jpg",
];

/* ================= CATEGORY → ROWS MAP ================= */
const categoryRows = {
  Action: [
    { title: "Top Action Picks", posters: row4 },
    { title: "Explosive Action Movies", posters: row1 },
  ],
  Horror: [
    { title: "Popular Horror Films", posters: row2 },
    { title: "Nightmare Collection", posters: row5 },
  ],
  "Sci-Fi": [
    { title: "Top Sci-Fi Films", posters: row1 },
    { title: "Future Worlds", posters: row3 },
  ],
  Thriller: [
    { title: "New Thrillers", posters: row3 },
    { title: "Edge of the Seat", posters: row5 },
  ],
  Suspense: [
    { title: "Suspense Hits", posters: row5 },
    { title: "Mind-Bending Stories", posters: row2 },
  ],
};

const categories = Object.keys(categoryRows);

function Movies() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [activeCategory, setActiveCategory] = useState("Action");
  const [currentVideo, setCurrentVideo] = useState(0);
  const timerRef = useRef(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  /* ================= HERO VIDEO ROTATION ================= */
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
    }, heroVideos[currentVideo].duration);

    return () => clearTimeout(timerRef.current);
  }, [currentVideo]);

  return (
    <>
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[100svh] md:h-screen overflow-hidden bg-black">
        <video
          key={heroVideos[currentVideo].src}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src={heroVideos[currentVideo].src} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex items-end px-6 md:px-16 pb-20">
          <div className="max-w-2xl text-white space-y-4">
            <p className="uppercase text-sm tracking-widest text-gray-300">
              StreamFlix Movies
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold">
              A World of Cinema
            </h1>
            <p className="text-gray-300 max-w-xl">
              From action-packed adventures to emotional dramas and thrilling mysteries —
              discover movies made for every mood.
            </p>
            <button className="px-7 py-3 bg-red-600 hover:bg-red-700 rounded-md font-semibold transition">
              Start Watching
            </button>
          </div>
        </div>
      </section>

      {/* ================= MOVIES SECTION ================= */}
      <section className="bg-[#0b0b0b] pt-10 pb-10">

        {/* TOP BUTTONS */}
        <div className="px-6 md:px-16 mb-6 flex gap-4">
          <button
            onClick={() => setActiveTab("ALL")}
            className={`px-6 py-2 rounded-full text-sm transition ${activeTab === "ALL"
              ? "bg-white text-black"
              : "bg-white/10 text-white hover:bg-white/20"
              }`}
          >
            All
          </button>

          <button
            onClick={() => setActiveTab("CATEGORY")}
            className={`px-6 py-2 rounded-full text-sm transition ${activeTab === "CATEGORY"
              ? "bg-white text-black"
              : "bg-white/10 text-white hover:bg-white/20"
              }`}
          >
            Category
          </button>
        </div>

        {/* CATEGORY BUTTONS */}
        {activeTab === "CATEGORY" && (
          <div className="px-6 md:px-16 mb-8 flex gap-3 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm transition ${activeCategory === cat
                  ? "bg-white text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* ALL ROWS */}
        {activeTab === "ALL" && (
          <>
            <Row
              title="Trending Now"
              posters={row1}
              onPosterClick={(img) => setSelectedMovie(movieMeta[img])}
            />
            <Row
              title="Top Picks For You"
              posters={row2}
              onPosterClick={(img) => setSelectedMovie(movieMeta[img])}
            />
            <Row
              title="New Releases"
              posters={row3}
              onPosterClick={(img) => setSelectedMovie(movieMeta[img])}
            />
            <Row
              title="Blockbuster Movies"
              posters={row4}
              onPosterClick={(img) => setSelectedMovie(movieMeta[img])}
            />
            <Row
              title="Critically Acclaimed"
              posters={row5}
              onPosterClick={(img) => setSelectedMovie(movieMeta[img])}
            />
          </>
        )}

        {/* CATEGORY ROWS (REAL LOGIC) */}
        {activeTab === "CATEGORY" &&
          categoryRows[activeCategory]?.map((row, i) => (
            <Row
              key={i}
              title={row.title}
              posters={row.posters}
              onPosterClick={(img) => setSelectedMovie(movieMeta[img])}
            />
          ))}
      </section>
      <MoviePreview
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

      <Footer />
    </>
  );
}

export default Movies;
