// useLocoScroll.js
import { useLayoutEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const useLocoScroll = (start) => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    if (!start) return;

    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      document.body.style.overflow = 'auto';
      console.log('📱 Mobile detected — Locomotive OFF');
      return;
    }

    const scrollEl = document.querySelector('.App');

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      lerp: 0.1,
    });

    // зачуваме глобално да имаш пристап од Navbar ако треба
    window.locoScroll = locoScroll;

    // update GSAP кога Locomotive скрола
    locoScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? 'transform' : 'fixed',
    });

    ScrollTrigger.defaults({ scroller: scrollEl });

    // 🚀 ОВДЕ додај за anchor линкови
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        if (target) {
          locoScroll.scrollTo(target, {
            callback: () => {
              // ⬇️ ова е клучното
              ScrollTrigger.refresh();
            },
          });
        }
      });
    });

    // initial sync
    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();

    return () => {
      locoScroll.destroy();
      ScrollTrigger.removeEventListener('refresh', () => locoScroll.update());
    };
  }, [start]);
};

export default useLocoScroll;
