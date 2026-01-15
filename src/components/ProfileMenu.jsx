import { motion } from "framer-motion";
import { FiLogOut, FiSettings } from "react-icons/fi";

export default function ProfileMenu({ user, onClose, onLogout }) {
  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40"
      />

      {/* POPUP */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="
          fixed top-16 right-6 z-50
          w-72
          rounded-2xl
          bg-[#121212]
          border border-white/10
          shadow-2xl
          p-4
          text-white
        "
      >
        {/* USER INFO */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={user?.avatar || "/avatar.png"}
            alt="profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{user?.name}</p>
            <p className="text-xs text-gray-400">{user?.email}</p>
          </div>
        </div>

        <div className="border-t border-white/10 my-3" />

        {/* ACTIONS */}
        <button
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition"
        >
          <FiSettings size={16} />
          <span className="text-sm">Account Settings</span>
        </button>

        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-600/20 text-red-500 transition mt-1"
        >
          <FiLogOut size={16} />
          <span className="text-sm">Sign out</span>
        </button>
      </motion.div>
    </>
  );
}
