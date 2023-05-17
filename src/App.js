import './App.css';
import Home from './Home';
import Navbar from './components/Navbar';
import Pictures from './Pictures';
import RSVP from './RSVP';
import Footer from './components/Footer';
import Venue from './Venue';
import Information from './Information';
import Gifts from './Gifts';
import {Route, Routes} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
    <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home  title="Home" />} />
        <Route path="/pictures" element={<Pictures  title="Pictures" />} />
        <Route path="/gifts" element={<Gifts  title="Gifts" />} />
        <Route path="/rsvp" element={<RSVP  title="RSVP" />} />
        <Route path="/venue" element={<Venue  title="The Venue" />} />
        <Route path="/information" element={<Information  title="Information" />} />
      </Routes>
      <Footer />
    
    </>
    
  );
}

export default App;
