import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { Logo } from "./Logo";
import { AnimatedBackground } from "./AnimatedBackground";
import { apiRequest } from "../utils/api";

export default function RegisterScreen() {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const loadingToast = toast.loading("Creating account...");

    try {
      const data = await apiRequest("/auth/register", "POST", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Account created successfully 🎉", {
        id: loadingToast, // ✅ replace loading toast
      });

      setTimeout(() => navigate("/"), 1200);
    } catch (err) {
      toast.error(err.message || "Registration failed", {
        id: loadingToast, // ✅ replace loading toast
      });
    }
  };
  return (
    <>
      <AnimatedBackground />
      <Logo />

      <motion.div
        className="min-h-screen flex items-center justify-center px-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="w-full max-w-sm backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">

          <h1 className="text-2xl font-bold text-white mb-1">
            Create Account
          </h1>
          <p className="text-gray-400 mb-6 text-sm">
            Join StreamFlix today
          </p>

          <form className="space-y-4" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl bg-black/40 text-white outline-none border border-white/10 focus:border-red-600"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl bg-black/40 text-white outline-none border border-white/10 focus:border-red-600"
            />

            <div className="relative">
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-black/40 text-white outline-none border border-white/10 focus:border-red-600"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {show ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-black/40 text-white outline-none border border-white/10 focus:border-red-600"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 font-semibold text-white transition"
            >
              Create Account
            </button>
          </form>

          <p className="text-gray-400 text-sm mt-6 text-center">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-red-500 font-semibold"
            >
              Sign in
            </button>
          </p>
        </div>
      </motion.div>
    </>
  );
}
