import React, { useState, useEffect } from "react";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import SearchBox from "./SearchBox";
import ProfileMenu from "./ProfileMenu";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  // ✅ SAFE USER READ
  const rawUser = isLoggedIn
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const user = rawUser
    ? {
      ...rawUser,
      avatar:
        rawUser.avatar ||
        `https://ui-avatars.com/api/?name=${encodeURIComponent(
          rawUser.name
        )}&background=E50914&color=fff`,
    }
    : null;

  const showSearch = location.pathname !== "/search" && !open;

  /* Header entrance animation */
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  /* Scroll background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "MOVIES", path: "/movies" },
    { name: "MY LIST", path: "/mylist" },
    { name: "ABOUT US", path: "/aboutus" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-700 ease-out
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
        ${open
          ? "bg-black"
          : scrolled
            ? "bg-black/70 backdrop-blur-md"
            : "bg-transparent"}
      `}
    >
      {/* ================= DESKTOP HEADER ================= */}
      <div className="hidden lg:grid max-w-7xl mx-auto px-6 h-16 grid-cols-3 items-center text-white">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center font-bold tracking-[0.25em] cursor-pointer"
        >
          <span className="text-red-600 text-2xl">STREAM</span>
          <span className="text-white text-2xl ml-1">FLIX</span>
        </div>

        {/* NAV */}
        {/* NAV */}
        <nav className="flex items-center justify-center gap-8 text-sm font-semibold">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end
              className={({ isActive }) =>
                `relative transition-colors duration-300
         ${isActive ? "text-red-600" : "text-white hover:text-red-600"}`
              }
            >
              {item.name}

              {/* UNDERLINE */}
              <span
                className={`
          absolute -bottom-1 left-0 w-full h-[2px]
          bg-red-600
          transition-transform duration-300 origin-left
          ${location.pathname === item.path
                    ? "scale-x-100"
                    : "scale-x-0"}
        `}
              />
            </NavLink>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-3 justify-self-end">
          {showSearch && <SearchBox />}

          {!isLoggedIn ? (
            <FiUser
              size={18}
              onClick={() => navigate("/login")}
              className="cursor-pointer hover:scale-110 transition"
            />
          ) : (
            <img
              src={user?.avatar || "/default-avatar.png"}
              alt="profile"
              onClick={() => setProfileOpen(true)}
              className="w-8 h-8 rounded-full object-cover cursor-pointer ring-1 ring-white/20 "
            />
          )}
        </div>
      </div>

      {/* ================= MOBILE HEADER ================= */}
      <div className="lg:hidden flex items-center justify-between px-6 h-16 text-white">
        <div
          onClick={() => navigate("/")}
          className="flex items-center font-bold tracking-[0.25em] cursor-pointer"
        >
          <span className="text-red-600 text-xl">STREAM</span>
          <span className="text-white text-xl ml-1">FLIX</span>
        </div>

        <div className="flex items-center gap-3">
          {showSearch && <SearchBox />}
          <button onClick={() => setOpen(!open)} className="text-2xl">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`lg:hidden bg-black text-white transition-all duration-500 ${open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 py-6 space-y-5 text-sm font-semibold">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block pl-3 border-l-4 transition-all duration-300
   ${isActive
                  ? "text-red-600 border-red-600"
                  : "border-transparent hover:text-red-500"}`}
            >
              {item.name}
            </NavLink>
          ))}

          {!isLoggedIn ? (
            <button
              onClick={() => navigate("/login")}
              className="w-full border border-white/70 py-2 rounded-full hover:bg-white hover:text-black transition"
            >
              Sign In
            </button>
          ) : (
            <button
              onClick={() => {
                setProfileOpen(true);
                setOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10"
            >
              <img
                src={user?.avatar || "/default-avatar.png"}
                className="w-9 h-9 rounded-full"
              />
              <div>
                <p className="font-semibold pr-18">{user?.name}</p>
                <p className="text-xs text-gray-400">{user?.email}</p>
              </div>
            </button>
          )}
        </div>
      </div>

      {/* ================= PROFILE POPUP ================= */}
      {isLoggedIn && profileOpen && (
        <ProfileMenu
          user={user}
          onClose={() => setProfileOpen(false)}
          onLogout={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setProfileOpen(false);
            navigate("/login");
          }}
        />
      )}
    </header>
  );
}

export default Header;
