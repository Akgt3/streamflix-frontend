import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black  text-[#757575]">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Social Icons */}
        <div className="flex gap-6 text-white text-xl mb-8">
          <FaFacebookF className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">

          <ul className="space-y-4">
            <li className="hover:underline cursor-pointer">Audio Description</li>
            <li className="hover:underline cursor-pointer">Investor Relations</li>
            <li className="hover:underline cursor-pointer">Legal Notices</li>
          </ul>

          <ul className="space-y-4">
            <li className="hover:underline cursor-pointer">Help Centre</li>
            <li className="hover:underline cursor-pointer">Jobs</li>
            <li className="hover:underline cursor-pointer">Cookie Preferences</li>
          </ul>

          <ul className="space-y-4">
            <li className="hover:underline cursor-pointer">Gift Cards</li>
            <li className="hover:underline cursor-pointer">Terms of Use</li>
            <li className="hover:underline cursor-pointer">Corporate Information</li>
          </ul>

          <ul className="space-y-4">
            <li className="hover:underline cursor-pointer">Media Centre</li>
            <li className="hover:underline cursor-pointer">Privacy</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
          </ul>

        </div>

        {/* Copyright */}
        <p className="mt-10 text-xs">
          © 1997–2025 StreamFlix, Inc.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
