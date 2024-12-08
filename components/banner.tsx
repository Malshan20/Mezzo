"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

import AnimatedTitle from "./AnimatedTitle";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      duration: 1,
      ease: "power2.out",
    });

    return () => {
      // Clean up ScrollTrigger instance to avoid memory leaks
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="about" className="min-h-screen w-screen">
        {/* Scroll Trigger Section */}
      <div className="h-screen w-screen" id="clip">
        <div className="mask-clip-path about-image relative">
          <img
            src="/banner.jpg"
            alt="Background"
            className="absolute left-0 top-0 h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold font-serif" style={{ fontSize: '80px' }}>
          Discover Your Timeless Style
          </div>
        </div>
      </div>
      {/* Header Section */}
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        

        

        <div className="about-subtext text-center">
          <p className="text-gray-900 font-serif" style={{ fontSize: '40px' }}> the sunny shores of California.</p>
          <p className="text-gray-500">
          Essentials For The Wanderers
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default About;
