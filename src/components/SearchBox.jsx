import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/search")}
      className="
        w-9 h-9
        flex items-center justify-center
        rounded-full
        border border-white/30
        bg-black/40
        backdrop-blur-md
        hover:bg-white/10
        transition
      "
      aria-label="Search"
    >
      <FiSearch size={15} className="text-white" />
    </button>
  );
}

export default SearchBox;
