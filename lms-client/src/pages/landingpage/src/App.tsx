import React, { useState, useEffect } from 'react';
import Navigation from './components/navigation';
import Header from './components/header';
// import Features from './components/features';
// import About from './components/about';
// import Services from './components/services';
// import Gallery from './components/gallery';
// import Testimonials from './components/testimonials';
// import Footer from './components/footer';
import JsonData from './data/data.json';
import SmoothScroll from 'smooth-scroll';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

interface HeaderData {
  title: string;
  paragraph: string;
  // Add more properties as needed
}

interface Feature {
  title: string;
  text: string;
  icon: string; // Assuming 'icon' is a string representing the class name for an icon
}

interface Abouts {
    paragraph?: string;
    Why?: string[];
    Why2?: string[];
  }

interface Service {
  name?: string;
  icon?: string;
  text?: string;
}
interface Testimonial {
  name?: string;
  img?: string;
  text?: string;
}

interface LandingPageData {
  Header: HeaderData;
  Features: Feature[];
  About: Abouts;
  Services: Service[];
  Testimonials: Testimonial[];
}

const LandingApp: React.FC = () => {
  const [landingPageData, setLandingPageData] = useState<LandingPageData>({
    Header: { title: '', paragraph: '' }, // Initialize with appropriate default values
    Features: [],
    About: { paragraph: '', Why: [''], Why2: [''] },
    Services: [],
    Testimonials: [],
  });

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default LandingApp;
