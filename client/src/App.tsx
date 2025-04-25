import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/not-found';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { useState, useEffect } from "react";
import Cursor from "@/components/Cursor";
import SpaceBackground from "@/components/SpaceBackground";
import { motion } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Initial loading state:', loading); // Debug log
    const timer = setTimeout(() => {
      console.log('Timer fired, setting loading to false'); // Debug log
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background">
        <motion.div 
          className="text-4xl font-bold text-primary"
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scale: [0.95, 1, 0.95],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          Welcome
        </motion.div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-background text-foreground relative">
          <SpaceBackground />
          <Cursor />
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <footer className="bg-gray-800 text-white py-6 mt-8">
            <div className="container mx-auto px-4 text-center">
              <p>© 2024 Your Name. All rights reserved.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  Twitter
                </a>
              </div>
            </div>
          </footer>
        </div>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;