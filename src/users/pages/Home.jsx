import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Row from "../../components/Row";
import Studios from "../../components/Studios";
import { FiPlus } from "react-icons/fi";
import Top10Row from "../../components/Top10Row";
import MoviePreview from "../../components/MoviePreview";
import { useNavigate } from "react-router-dom";


/* ================= HERO VIDEOS ================= */




const heroVideos = [
  { src: "/net1.mp4", duration: 3000 },
  { src: "/net2.mp4", duration: 3000 },
  { src: "/net3.mp4", duration: 4000 },
];
export const homeMovieMeta = {
  "/ratio/r1.jpg": {
    image: "/ratio/r1.jpg",
    title: "The Ritual",
    rating: "U/A 13+",
    duration: "2h 15m",
    genres: ["Horror/Mystery"],
    description: "A trip to the Swedish wilderness turns murky as four friends try to mend their strained relationships. However, in the forest, they realise that they are not alone.",
    video: "/ratio/r1-trailer.mp4",

  },

  "/ratio/r2.webp": {
    image: "/ratio/r2.webp",
    title: "The First Omen",
    rating: "18+",
    duration: "1h 58m",
    genres: ["Horror/Supernatural"],
    description: "A woman starts to question her own faith when she uncovers a terrifying conspiracy to bring about the birth of evil incarnate in Rome."
  },
  "/ratio/r3.avif": {
    image: "/ratio/r3.avif",
    title: "Diés Iraé",
    rating: "18+",
    duration: "1h 58m",
    genres: ["Horror/Supernatural"],
    description: "Rohan's affluent lifestyle spirals out of control as he is convinced a supernatural entity is in his home. His search for the mystery draws him into unexpected worlds and alliances and the horrors that lie ahead."
  },
  "/ratio/r4.jpg": {
    image: "/ratio/r4.jpg",
    title: "The Pale Blue Eye",
    rating: "U/A 16+",
    duration: "2h 10m",
    genres: ["Crime/Drama"],
    description: "In 1830, a veteran detective investigates a series of murders at the U.S. Military Academy in West Point, with the help of a young cadet named Edgar Allan Poe.",
  },
  "/ratio/r5.jpg": {
    image: "/ratio/r5.jpg",
    title: "The Black Phone",
    rating: "U/A 16+",
    duration: "1h 42m",
    genres: ["Horror/Thriller"],
    description: "A kidnapped boy receives calls on a disconnected phone from the killer's previous victims.",
  },
  "/ratio/r6.jpg": {
    image: "/ratio/r6.jpg",
    title: "The Menu",
    rating: "U/A 16+",
    duration: "1h 47m",
    genres: ["Horror/Thriller"],
    description: "A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.",
  },
  "/ratio/r7.jpg": {
    image: "/ratio/r7.jpg",
    title: "The Outlaws",
    rating: "U/A 16+",
    duration: "2h 12m",
    genres: ["Action/Crime"],
    description: "A band of misfits in South London are forced to work together to pay off a debt to a powerful crime lord.",
  },
  "/ratio/r8.jpg": {
    image: "/ratio/r8.jpg",
    title: "The Gray Man",
    rating: "U/A 16+",
    duration: "2h 10m",
    genres: ["Action/Thriller"],
    description: "A CIA operative on the run from a psychopathic former colleague who is intent on killing him.",
  },
  "/ratio/r9.jpg": {
    image: "/ratio/r9.jpg",
    title: "The Adam Project",
    rating: "U/A 13+",
    duration: "2h 16m",
    genres: ["Sci-Fi/Adventure"],
    description: "After crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self and his late father to come to terms with his past while saving the future.",
  },
  "/ratio/r10.webp": {
    image: "/ratio/r10.webp",
    title: "Enola Holmes 2",
    rating: "U/A 13+",
    duration: "2h 4m",
    genres: ["Mystery/Adventure"],
    description: "Enola Holmes, the teenage sister of Sherlock Holmes, embarks on a thrilling adventure to find a missing girl while outsmarting her famous brother and unraveling a dangerous conspiracy.",
  },

  "/ratio/r11.jpg": {
    image: "/ratio/r11.jpg",
    title: "Glass Onion",
    rating: "U/A 16+",
    duration: "2h 19m",
    genres: ["Mystery/Comedy"],
    description: "Detective Benoit Blanc travels to Greece to peel back the layers of a mystery involving a new cast of colorful suspects.",
  },
  "/ratio/r12.jpg": {
    image: "/ratio/r12.jpg",
    title: "The Whale",
    rating: "18+",
    duration: "1h 57m",
    genres: ["Drama"],
    description: "A reclusive English teacher suffering from severe obesity attempts to reconnect with his estranged teenage daughter for one last chance at redemption.",
  },
  "/ratio/r13.jpg": {
    image: "/ratio/r13.jpg",
    title: "All Quiet on the Western Front",
    rating: "18+",
    duration: "2h 28m",
    genres: ["War/Drama"],
    description: "A young German soldier's terrifying experiences and distressing realities of World War I.",
  },
  "/ratio/r14.jpg": {
    image: "/ratio/r14.jpg",
    title: "The Menu",
    rating: "U/A 16+",
    duration: "1h 47m",
    genres: ["Horror/Thriller"],
    description: "A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.",
  },
  "/ratio/r15.jpg": {
    image: "/ratio/r15.jpg",
    title: "The School for Good and Evil",
    rating: "U/A 13+",
    duration: "2h 5m",
    genres: ["Fantasy/Adventure"],
    description: "Best friends Sophie and Agatha find themselves on opposing sides of an epic battle between good and evil when they are swept away to the School for Good and Evil.",
  },
  "/ratio/r16.jpg": {
    image: "/ratio/r16.jpg",
    title: "The Pale Blue Eye",
    rating: "U/A 16+",
    duration: "2h 10m",
    genres: ["Crime/Drama"],
    description: "In 1830, a veteran detective investigates a series of murders at the U.S. Military Academy in West Point, with the help of a young cadet named Edgar Allan Poe.",
  },
  "/ratio/r17.jpg": {
    image: "/ratio/r17.jpg",
    title: "The Black Phone",
    rating: "U/A 16+",
    duration: "1h 42m",
    genres: ["Horror/Thriller"],
    description: "A kidnapped boy receives calls on a disconnected phone from the killer's previous victims.",
  },
  "/ratio/r18.jpg": {
    image: "/ratio/r18.jpg",
    title: "The Outlaws",
    rating: "U/A 16+",
    duration: "2h 12m",
    genres: ["Action/Crime"],
    description: "A band of misfits in South London are forced to work together to pay off a debt to a powerful crime lord.",
  },
  "/ratio/r19.webp": {
    image: "/ratio/r19.webp",
    title: "The Gray Man",
    rating: "U/A 16+",
    duration: "2h 10m",
    genres: ["Action/Thriller"],
    description: "A CIA operative on the run from a psychopathic former colleague who is intent on killing him.",
  },
  "/ratio/r20.jpg": {
    image: "/ratio/r20.jpg",
    title: "The Adam Project",
    rating: "U/A 13+",
    duration: "2h 16m",
    genres: ["Sci-Fi/Adventure"],
    description: "After crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self and his late father to come to terms with his past while saving the future.",
  },

};


const games = [
  "/p5.webp",
  "/p2.jpg",
  "/p4.jpg",
  "/p5.webp",
  "/p6.jpg",
  "/p7.jpg",
  "/p8.jpg",
  "/p9.jpg",
  "/p10.jpg"
];

const row1 = [
  "/ratio/r1.jpg",
  "/ratio/r2.webp",
  "/ratio/r3.avif",
  "/ratio/r10.webp",
  "/ratio/r11.jpg",
  "/ratio/r12.jpg",
  "/ratio/r13.jpg",
  "/ratio/r14.jpg",
  "/ratio/r15.jpg",
  "/ratio/r16.jpg",
];

const row2 = [
  "/ratio/r17.jpg",
  "/ratio/r18.jpg",
  "/ratio/r19.webp",
  "/ratio/r20.jpg",
  "/ratio/r4.jpg",
  "/ratio/r5.jpg",
  "/ratio/r6.jpg",
  "/ratio/r7.jpg",
  "/ratio/r8.jpg",
  "/ratio/r9.jpg",
];



const top10 = [
  {
    title: "The Great Indian Kapil Show",
    image: "/top/t1.jpg",
    description: "India’s biggest comedy talk show",
    rating: "U/A 13+",
    duration: "2h",
    genres: ["Comedy"]
  },
  {
    title: "Single Papa",
    image: "/top/t2.webp",
    description: "A heartfelt drama about single fatherhood",
    rating: "U/A 13+",
    duration: "2h",
    genres: ["Drama"]
  },
  {
    title: "Emily in Paris",
    image: "/top/t3.jpg",
    description: "A young American woman navigates life and love in Paris",
    rating: "U/A 13+",
    duration: "2h",
    genres: ["Romance", "Comedy"]
  },
  {
    title: "Man vs Baby",
    image: "/top/t4.jpg",
    description: "A hilarious take on parenting challenges",
    rating: "U/A 13+",
    duration: "2h",
    genres: ["Comedy"]
  },
  {
    title: "Stranger Things",
    image: "/top/t5.jpg",
    description: "A thrilling sci-fi series set in the 80s",
    rating: "U/A 16+",
    duration: "2h",
    genres: ["Sci-Fi", "Thriller"]
  },
  {
    title: "SmackDown",
    image: "/top/t6.jpg",
    description: "Weekly wrestling entertainment show",
    rating: "U/A 16+",
    duration: "2h",
    genres: ["Sports", "Entertainment"]
  },
  {
    title: "Money Heist",
    image: "/top/t7.jpg",
    description: "A thrilling heist drama series",
    rating: "U/A 16+",
    duration: "2h",
    genres: ["Crime", "Drama"]
  },
  {
    title: "The Flash",
    image: "/top/t8.webp",
    description: "A superhero series based on the DC Comics character",
    rating: "U/A 13+",
    duration: "2h",
    genres: ["Action", "Sci-Fi"]
  },
  {
    title: "Lucifer",
    image: "/top/t9.webp",
    description: "The Devil retires to Los Angeles and runs a nightclub",
    rating: "U/A 16+",
    duration: "2h",
    genres: ["Fantasy", "Crime"]
  },
  {
    title: "Manifest",
    image: "/top/t10.webp",
    description: "Passengers on a flight experience a mysterious event",
    rating: "U/A 13+",
    duration: "2h",
    genres: ["Mystery", "Drama"]
  },
];


function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const timerRef = useRef(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const navigate = useNavigate();

  /* ================= VIDEO ROTATION ================= */
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
      <section className="relative w-full overflow-hidden bg-black h-[100svh] md:h-screen">

        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="
      absolute inset-0
      w-full h-full
      object-cover
      object-center
      scale-105
      pointer-events-none
    "
        >
          <source src="/v1.mp4" type="video/mp4" />
        </video>

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-end px-6 md:px-16 pb-20">
          <div className="max-w-2xl text-white space-y-4">

            <p className="uppercase text-sm tracking-widest text-gray-300">
              StreamFlix Movies
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <img className="w-48 md:w-64" src="/z2.webp" alt="" />
            </h1>

            <p className="text-sm md:text-base text-gray-300 max-w-xl">
              Follow the journey of Simba, a young lion prince destined for greatness,
              as he discovers courage, responsibility, and the true meaning of family
              while reclaiming his rightful place in the Circle of Life.            </p>

            <div className="flex items-center gap-4 pt-4">
              <button className="px-7 py-3 rounded-md bg-red-600 hover:bg-red-700 font-semibold transition">
                Watch Now
              </button>

              <button className="w-12 h-12 flex items-center justify-center rounded-md bg-white/20 hover:bg-white/30 transition">
                <FiPlus size={22} />
              </button>
            </div>

          </div>
        </div>

      </section>

      {/* ================= ROWS ================= */}
      <section className="bg-[#0b0b0b] py-6">
        <Row
          title="Top Picks for You"
          posters={row1}
          onPosterClick={(img) => setSelectedMovie(homeMovieMeta[img])}
        />

        <Row
          title="Popular Picks"
          posters={row2}
          onPosterClick={(img) => setSelectedMovie(homeMovieMeta[img])}
        />
      </section>


      <Top10Row
        title="New on StreamFlix"
        items={top10}
        onItemClick={(item) => setSelectedMovie(item)}
      />


      {/* ================= STUDIOS ================= */}
      <Studios />

      {/* ================= GAME LIBRARY ================= */}
      <section className="relative w-full bg-[#0b0b0b] overflow-hidden py-6">

        <div className="relative w-[200%] flex gap-6 animate-library px-6">
          {[...games, ...games].map((img, i) => (
            <div
              key={i}
              className="w-56 md:w-64 aspect-[2/3] shrink-0 overflow-hidden rounded-lg"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-500"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />

        <div className="absolute bottom-16 left-6 md:left-16 max-w-xl text-white z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore the Movie Library
          </h2>
          <p className="text-gray-300 mb-6">
            From blockbuster hits to critically acclaimed films —
            discover stories crafted for every mood.
          </p>
          <button onClick={() => navigate("/movies")
          } className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition" >
            All Movies
          </button>
        </div>
      </section >

      <MoviePreview
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />


      <Footer />
    </>
  );
}

export default Home;
