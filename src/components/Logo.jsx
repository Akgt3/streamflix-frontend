import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function Logo() {
  const navigate = useNavigate();
  return (
    <motion.div
      className="fixed top-6 left-6 z-50 text-3xl font-bold"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div onClick={() => navigate("/")} className="flex items-center cursor-pointer select-none"
      >
        <span className="text-red-600">STREAM</span>
        <span className="text-white">FLIX</span>

      </div>
    </motion.div >
  );
}
