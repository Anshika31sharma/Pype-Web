export default function Navbar() {
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
        <div className=" flex-wrap items-center gap-4 mr-4 md:mr-10 mt-2 md:mt-0 hidden md:flex">
          <a
            href="#features"
            className="cursor-pointer text-sm text-gray-700 scroll-smooth"
          >
            Features
          </a>
          <button className="bg-black w-20 md:w-24 rounded-md text-white text-xs py-2">
            Launch App
          </button>
        </div>
      </nav>
      <hr className="border-t border-gray-300" />
    </>
  );
}
