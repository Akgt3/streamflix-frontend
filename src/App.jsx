import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

import Home from "./users/pages/Home";
import Preloader from "./components/Preloader";
import Movies from "./users/pages/Movies";
import Mylist from "./users/pages/Mylist";
import Aboutus from "./users/pages/Aboutus";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import Search from "./users/pages/Search";



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Routes>
      <Route path="/" element={loading ? <Preloader /> : <Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/mylist" element={<Mylist />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/search" element={<Search />} />

    </Routes>
  );
}

export default App;

