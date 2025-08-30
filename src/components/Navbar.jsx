import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-100 bg-white">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-tight">RecruitCo</div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#platform"
            className="text-gray-500 font-medium hover:text-black transition-colors"
          >
            Platform
          </a>
          <a
            href="#community"
            className="text-gray-500 font-medium hover:text-black transition-colors"
          >
            Community
          </a>
          <a
            href="#ai"
            className="text-gray-500 font-medium hover:text-black transition-colors"
          >
            AI Learning
          </a>
          <a
            href="#about"
            className="text-gray-500 font-medium hover:text-black transition-colors"
          >
            About
          </a>
        </div>

        {/* Auth Buttons (desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#signin" className="text-gray-700 font-medium hover:text-black">
            Sign In
          </a>
          <a
            href="#get-started"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2 rounded-xl transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center text-gray-700 hover:text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Simple hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
          <a
            href="#platform"
            className="block text-gray-600 font-medium hover:text-black transition-colors"
          >
            Platform
          </a>
          <a
            href="#community"
            className="block text-gray-600 font-medium hover:text-black transition-colors"
          >
            Community
          </a>
          <a
            href="#ai"
            className="block text-gray-600 font-medium hover:text-black transition-colors"
          >
            AI Learning
          </a>
          <a
            href="#about"
            className="block text-gray-600 font-medium hover:text-black transition-colors"
          >
            About
          </a>
          <hr className="border-gray-200" />
          <a
            href="#signin"
            className="block text-gray-700 font-medium hover:text-black"
          >
            Sign In
          </a>
          <a
            href="#get-started"
            className="block bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2 rounded-xl text-center transition-colors"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
