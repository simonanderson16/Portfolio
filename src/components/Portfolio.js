import About from "./About";
import Footer from "./Footer";
import Intro from "./Intro";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Skills from "./Skills";
import Timeline from "./Timeline";

import { useState, useEffect } from "react";

export default function Portfolio() {

    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll('section');
  
        sections.forEach((section) => {
          const { top, bottom } = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;
  
          if (top <= windowHeight * 0.5 && bottom >= windowHeight * 0.5) {
            setActiveSection(section.id);
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <>
            <NavBar sections={['about-section', 'skills-section', 'projects-section', 'timeline-section']} activeSection={activeSection}/>
            <section><Intro/></section>
            <section id="about-section"><About/></section>
            <section id="skills-section"><Skills/></section>
            <section id="projects-section"><Projects/></section>
            <section id="timeline-section"><Timeline/></section>
            <Footer/>
        </>
    );
}