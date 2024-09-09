import Features from './Components/Features'
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';

const Page = () => {

  return (
    <div>
      <Navbar />
      <Landing />
      <div id="features">
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
