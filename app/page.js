"use client"; // Ensure the component is a Client Component

import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import { useEffect } from "react";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    circles.forEach((circle) => {
      circle.x = 0;
      circle.y = 0;
      // Set gradient color for each circle
      circle.style.background = "linear-gradient(135deg, black, blue)";
    });

    window.addEventListener("mousemove", (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.scale = (circles.length - index) / circles.length;
        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();
  }, []);

  return (
    <main className="flex min-h-screen flex-col relative bg-cover bg-center" style={{ backgroundImage: 'url("/images/bgpassco.jpg")' }}>
      <Nav />
      <div className="container mt-[10px] px-12 py-10 mx-auto">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />

      {[...Array(22)].map((_, i) => (
        <div key={i} className="circle"></div>
      ))}
    </main>
  );
}
