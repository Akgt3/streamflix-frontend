import React, { useState, useMemo } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MoviePreview from "../../components/MoviePreview";
import { homeMovieMeta } from "./Home";
import { movieMeta } from "./Movies";

function Search() {
  const [query, setQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const allMovies = useMemo(() => {
    const map = new Map();
    [...Object.values(homeMovieMeta), ...Object.values(movieMeta)].forEach(
      (m) => map.set(m.title.toLowerCase(), m)
    );
    return Array.from(map.values());
  }, []);

  const filteredMovies = query
    ? allMovies.filter((m) =>
      m.title.toLowerCase().includes(query.toLowerCase())
    )
    : [];

  return (
    <>
      <Header />

      <section className="min-h-screen bg-[#0b0b0b] px-6 md:px-16 pt-24 text-white">
        <h1 className="text-lg md:text-xl font-semibold mb-4">Search</h1>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="w-full max-w-md bg-black/50 border border-white/20 rounded-full px-5 py-2.5 text-sm outline-none"
        />

        {query && (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 mt-6">
            {filteredMovies.map((movie, i) => (
              <div
                key={i}
                onClick={() => setSelectedMovie(movie)}
                className="cursor-pointer"
              >
                <div className="aspect-[2/3] rounded-md overflow-hidden">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-[11px] text-gray-300 truncate">
                  {movie.title}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      <MoviePreview
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

      <Footer />
    </>
  );
}

export default Search;
