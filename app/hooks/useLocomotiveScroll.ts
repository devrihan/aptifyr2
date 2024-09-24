"use client";
import { useEffect } from 'react';

const useLocomotiveScroll = () => {
  useEffect(() => {
    // Check if the code is running on the client side
    if (typeof window !== 'undefined') {
      import('locomotive-scroll').then((LocomotiveScrollModule) => {
        const LocomotiveScroll = LocomotiveScrollModule.default;
        
        const scrollEl = document.querySelector('#scroll-container') as HTMLElement;
        if (!scrollEl) return;

        const locomotiveScroll = new LocomotiveScroll({
          el: scrollEl,
          smooth: true,
        });

        return () => {
          if (locomotiveScroll) locomotiveScroll.destroy();
        };
      });
    }
  }, []);
};

export default useLocomotiveScroll;
