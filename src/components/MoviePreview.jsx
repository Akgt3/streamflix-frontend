import { useEffect, useRef, useState } from "react";
import {
  FiPlay,
  FiPlus,
  FiX,
  FiThumbsUp,
  FiArrowLeft,
} from "react-icons/fi";
import toast from "react-hot-toast";
import { apiRequest } from "../utils/api";

function MoviePreview({ movie, onClose }) {
  if (!movie) return null;

  const [playMode, setPlayMode] = useState(false);
  const videoRef = useRef(null);
  const isLoggedIn = !!localStorage.getItem("token");

  /* ================= PLAY ================= */
  const handleWatch = () => {
    if (!isLoggedIn) {
      toast.error("Login to watch this title");
      return;
    }
    setPlayMode(true);
  };

  /* ================= ADD / REMOVE ================= */
  const handleRemove = async () => {
    try {
      await apiRequest(`/user/mylist/${movie.movieId}`, "DELETE");
      toast.success("Removed from My List");
      onClose();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleAdd = async () => {
    if (!isLoggedIn) {
      toast.error("Login to add to My List");
      return;
    }

    try {
      await apiRequest("/user/mylist", "POST", {
        movieId: movie.id || movie.title,
        title: movie.title,
        image: movie.image,
      });
      toast.success("Added to My List");
    } catch (err) {
      toast.error(err.message);
    }
  };

  /* ================= EXIT PLAYER ================= */
  const exitPlayer = () => {
    setPlayMode(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  /* ===========================================================
     🎬 FULL PLAYER MODE (NETFLIX STYLE)
     =========================================================== */
  if (playMode) {
    return (
      <div className="fixed inset-0 z-[9999] bg-black">
        {/* TOP BAR */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center gap-4 px-6 py-4 bg-gradient-to-b from-black/80 to-transparent">
          <button
            onClick={exitPlayer}
            className="text-white text-2xl"
          >
            <FiArrowLeft />
          </button>

          <h1 className="text-white text-lg font-medium">
            {movie.title}
          </h1>

          <span className="ml-auto text-sm text-gray-300">
            Quality · Auto
          </span>
        </div>

        {/* VIDEO */}
        <video
          ref={videoRef}
          autoPlay
          controls
          className="w-full h-full object-contain bg-black"
        >
          <source src={movie.video || "/net1.mp4"} type="video/mp4" />
        </video>
      </div>
    );
  }

  /* ===========================================================
     🎞️ PREVIEW MODE (EXACTLY YOUR CURRENT UI)
     =========================================================== */
  return (
    <div className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center px-4">
      <div className="relative w-full max-w-[900px] bg-[#141414] rounded-xl overflow-hidden">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/60 flex items-center justify-center"
        >
          <FiX className="text-white" />
        </button>

        {/* HERO VIDEO */}
        <div className="relative aspect-video bg-black">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={movie.video || "/net1.mp4"} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

          {/* ACTIONS */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h1 className="text-3xl font-extrabold mb-4">
              {movie.title}
            </h1>

            <div className="flex gap-3">
              <button
                onClick={handleWatch}
                className="
                  flex items-center gap-2
                  px-6 py-2.5
                  bg-white text-black
                  rounded-md font-semibold
                  hover:bg-gray-200 transition
                "
              >
                <FiPlay /> Play
              </button>

              <button
                onClick={movie.movieId ? handleRemove : handleAdd}
                className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center"
              >
                {movie.movieId ? <FiX /> : <FiPlus />}
              </button>

              <button className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center">
                <FiThumbsUp />
              </button>
            </div>
          </div>
        </div>

        {/* DETAILS */}
        <div className="px-6 py-6 text-white grid md:grid-cols-[2fr_1fr] gap-6">
          <div>
            <div className="flex gap-3 text-sm text-gray-300 mb-3">
              <span className="text-green-400">IMDb {movie.imdb || "7.4"}</span>
              <span>{movie.year || "2024"}</span>
              <span>{movie.duration}</span>
              <span className="border px-2 rounded text-xs">
                {movie.rating}
              </span>
            </div>

            <p className="text-gray-300 text-sm">
              {movie.description}
            </p>
          </div>

          <div className="text-sm text-gray-400">
            Genres: {movie.genres?.join(", ")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePreview;
