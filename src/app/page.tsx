import { useEffect } from "react";
import Features from "./Features";
import Footer from "./Footer";
import Landing from "./Landing";
import Navbar from "./Navbar";

export default function Home() {
  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    localStorage.setItem("isDarkMode", isDarkMode ? "true" : "false");
  };
  return (
    <div>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <Landing />
      <div id="features">
        <Features />
      </div>
      <Footer />
    </div>
  );
}
