import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MoviePreview from "../../components/MoviePreview";
import { apiRequest } from "../../utils/api";

// ✅ IMPORT BOTH SOURCES
import { homeMovieMeta } from "./Home";
import { movieMeta } from "./Movies";

function MyList() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  /* LOAD USER LIST */
  useEffect(() => {
    const load = async () => {
      try {
        const data = await apiRequest("/user/mylist");
        setMovies(data || []);
      } catch {
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  /* 🔥 FIXED LOGIC */
  const handleMovieClick = (movieFromList) => {
    const fullMovie =
      homeMovieMeta[movieFromList.image] ||
      movieMeta[movieFromList.image] ||
      movieFromList;

    setSelectedMovie({
      ...fullMovie,
      movieId: movieFromList.movieId, // required for remove
    });
  };

  return (
    <>
      <Header />

      <section className="min-h-screen bg-[#0b0b0b] pt-28 pb-20">
        <div className="px-6 md:px-16 max-w-7xl mx-auto text-white">

          {/* HEADER */}
          <div className="mb-10 max-w-xl">
            <div className="w-10 h-[1px] bg-red-600 mb-4 opacity-80" />
            <h1 className="text-xl md:text-2xl font-medium">
              My List
            </h1>
            <p className="text-gray-400 text-sm mt-2 lowercase">
              movies you’ve saved for later viewing
            </p>
          </div>

          {/* STATES */}
          {loading && <p className="text-gray-400">Loading...</p>}

          {!loading && movies.length === 0 && (
            <p className="text-gray-400">
              You haven’t added any movies yet.
            </p>
          )}

          {/* GRID */}
          {!loading && movies.length > 0 && (
            <div className="
              grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
              gap-4 md:gap-6
            ">
              {movies.map((m) => (
                <div
                  key={m.movieId}
                  onClick={() => handleMovieClick(m)}
                  className="
                    aspect-[2/3]
                    rounded-lg
                    overflow-hidden
                    cursor-pointer
                    transition-transform hover:scale-105
                  "
                >
                  <img
                    src={m.image}
                    alt={m.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ✅ POPUP NOW WORKS */}
      <MoviePreview
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

      <Footer />
    </>
  );
}

export default MyList;
