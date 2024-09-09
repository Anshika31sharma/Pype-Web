import Features from './Features';
import Footer from './Footer';
import Landing from './Landing';
import Navbar from './Navbar';

const Home = () => {
  const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    localStorage.setItem('isDarkMode', isDarkMode ? 'true' : 'false');
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
};

export default Home;
