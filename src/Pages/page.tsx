import Features from '../app/Components/Features';
import Footer from '../app/Components/Footer';
import Landing from '../app/Components/Landing';
import Navbar from '../app/Components/Navbar';

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
