'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Leadership from '@/components/Leadership';
import Skills from '@/components/Skills';
// import Writing from '@/components/Writing';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Leadership />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
