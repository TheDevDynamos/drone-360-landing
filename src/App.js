import "./App.css";
import About from "./sections/about/About";
import Hero from "./sections/hero/Hero";
import HowItWorks from "./sections/howItWorks/HowItWorks";
import VideoGallery from "./sections/videoGallery/VideoGallery";

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <About></About>
      <HowItWorks></HowItWorks>
      <VideoGallery></VideoGallery>
    </div>
  );
}

export default App;
