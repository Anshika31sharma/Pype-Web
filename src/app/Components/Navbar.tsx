export default function Navbar() {
  const handleThemeToggle = () => {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    localStorage.setItem("isDarkMode", isDarkMode ? "true" : "false");
  };

  return (
    <>
      <nav className="flex flex-wrap justify-between items-center p-4 bg-white">
        <div className="flex items-center justify-center gap-4 ml-4 md:ml-10 sm:justify-between">
          <img
            src="https://framerusercontent.com/assets/iYyVKiqcjdg66d3kzlH8OxOAgJM.png"
            alt="Logo"
            className="w-16 h-8 md:w-20 md:h-10 rounded-full"
          />
          <p className="text-lg md:text-xl font-semibold text-gray-700">
            Pype AI
          </p>
        </div>
        <div className="flex-wrap items-center gap-4 mr-4 md:mr-10 mt-2 md:mt-0 hidden md:flex">
          <a
            href="#features"
            className="cursor-pointer text-sm text-gray-700 scroll-smooth"
          >
            Features
          </a>
          <button className="bg-black w-20 md:w-24 rounded-md text-white text-xs py-2">
            Launch App
          </button>
          <button
            className="theme-toggle-btn"
            onClick={handleThemeToggle}
            aria-label="Toggle theme"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </button>
        </div>
      </nav>
      <hr className="border-t border-gray-300" />
    </>
  );
}
