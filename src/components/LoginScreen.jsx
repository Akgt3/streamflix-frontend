import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { Logo } from "./Logo";
import { AnimatedBackground } from "./AnimatedBackground";
import { apiRequest } from "../utils/api";
import { GoogleLogin } from "@react-oauth/google";

export default function LoginScreen() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    const loadingToast = toast.loading("Signing in...");

    try {
      const data = await apiRequest("/auth/login", "POST", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Welcome back 🎬", {
        id: loadingToast, // ✅ replaces loading toast
      });

      setTimeout(() => navigate("/"), 1200);
    } catch (err) {
      toast.error(err.message || "Login failed", {
        id: loadingToast, // ✅ replaces loading toast
      });
    }
  };


  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      toast.loading("Signing in with Google...");

      const res = await fetch("http://localhost:5000/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          credential: credentialResponse.credential,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.dismiss();
      toast.success("Welcome to StreamFlix 🎬");

      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      toast.dismiss();
      toast.error("Google login failed");
    }
  };

  return (
    <>
      <AnimatedBackground />
      <Logo />

      <motion.div
        className="relative z-10 min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="w-full max-w-sm backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">

          <h1 className="text-2xl font-bold text-white mb-1">
            Sign In
          </h1>
          <p className="text-gray-400 mb-6 text-sm">
            Continue to StreamFlix
          </p>

          <form className="space-y-4" onSubmit={handleLogin}>
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

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 font-semibold text-white transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-gray-400 text-sm mt-6 text-center">
            New to StreamFlix?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-red-500 font-semibold"
            >
              Sign up now
            </button>
          </p>
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-gray-400 text-xs">OR</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              try {
                const loadingToast = toast.loading("Signing in with Google...");

                const res = await fetch("http://localhost:5000/api/auth/google", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    token: credentialResponse.credential,
                  }),
                });

                const data = await res.json();

                if (!res.ok) throw new Error(data.message);

                // ✅ SAVE BOTH
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));

                toast.success("Welcome to StreamFlix 🎬", { id: loadingToast });

                setTimeout(() => navigate("/"), 1200);

              } catch (err) {
                toast.dismiss();
                toast.error("Google login failed");
              }
            }}
            onError={() => toast.error("Google login failed")}
            theme="filled_black"
            size="large"
          />

        </div>

      </motion.div>
    </>
  );
}
