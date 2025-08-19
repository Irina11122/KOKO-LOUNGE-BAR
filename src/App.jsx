import Navbar from './components/Navbar';
import Contact from './sections/Contact';
import Home from './sections/Home';
import Specialties from './sections/Specialties';
import About from './sections/About';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import useLocoScroll from './hooks/useLocomotive'; // 👈 важно

export default function App() {
  useLocoScroll(true); // 🚀 вклучи го locomotivescroll hook

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pizza = document.querySelector('#animated-pizza');
    if (!pizza) return;

    gsap.set(pizza, { x: 0, y: 0, scale: 1, rotate: 0 });

    gsap.to(pizza, {
      x: -1430,
      y: 750,
      scale: 0.35,
      rotate: 45,
      ease: 'none',
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        endTrigger: '#specialties',
        end: 'top top',
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="App relative overflow-hidden">
      {' '}
      {/* 👈 bitno */}
      <Navbar />
      <img
        id="animated-pizza"
        src="/food/full-pizza.png"
        alt="animated-pizza"
      />
      <Home />
      <Specialties />
      <About />
      <Contact />
    </div>
  );
}
