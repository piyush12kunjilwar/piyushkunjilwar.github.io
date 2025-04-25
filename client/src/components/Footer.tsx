import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Get in touch</h3>
            <p className="text-muted-foreground">
              Boston, MA<br />
              (617) 516-9145<br />
              kunjilwar.p@northeastern.edu
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/piyush-kunjilwar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/piyush12kunjilwar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            <div className="space-y-2">
              <a 
                href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=4C5CFD1D0AA32F94A565DCF2B25A4240EC81D821F713C324FF9FDF6A99D056E6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Oracle Cloud Infrastructure 2024 Generative AI Professional
              </a>
              <a 
                href="https://www.linkedin.com/learning/certificates/6e2813ee8d2003980c09bc2ba98e5d0e9ac6cefdbebd8742c4634cee5c528c69?u=74653650" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Career Essentials in Generative AI by Microsoft and LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2024 Piyush Kunjilwar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}