import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full px-4 py-8 sm:max-w-[70rem] mx-auto">
      <div className="h-px bg-white/90 mb-4" />
      <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between text-gray-400 gap-4 sm:gap-0">
        <div>
          <small className="text-sm">© 2025 DALU OKONKWO</small>
        </div>

        <div className="hidden sm:block h-5 w-px bg-gray-800 mx-8" />

        <div className="flex gap-6 items-center">
          <Link
            href="https://www.linkedin.com/in/dalu-okonkwo/"
            target="_blank"
            className="hover:text-gray-200 transition-colors"
          >
            <FaLinkedin className="w-4 h-4" />
          </Link>
          <Link
            href="https://github.com/dalu-ao"
            target="_blank"
            className="hover:text-gray-200 transition-colors"
          >
            <FaGithub className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
