import { motion } from "framer-motion";
import { Download, Mail, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HireMe() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm currently available for new opportunities. Let's connect and discuss how I can contribute to your team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-card rounded-xl border border-border group hover:border-primary/50 transition-all"
          >
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Contact Me</h3>
            <div className="space-y-4">
              <a 
                href="mailto:kunjilwar.p@northeastern.edu"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                kunjilwar.p@northeastern.edu
              </a>
              <a 
                href="https://www.linkedin.com/in/piyush-kunjilwar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-card rounded-xl border border-border group hover:border-primary/50 transition-all"
          >
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Download CV</h3>
            <p className="text-muted-foreground mb-6">
              Get a detailed overview of my experience, skills, and achievements.
            </p>
            <Button 
              asChild
              className="gap-2"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Piyush.pdf';
                link.download = 'Piyush_Kunjilwar_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <span>
                <Download className="h-4 w-4" />
                Download Resume
              </span>
            </Button>
          </motion.div>
        </div>

        {/* View Full Portfolio Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Button 
            size="lg"
            variant="default"
            className="gap-2"
            asChild
          >
            <a href="https://portfolio-2.piyushkunjilwar" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <span>View Full Portfolio</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Background Effect */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
      </motion.div>
    </section>
  );
}