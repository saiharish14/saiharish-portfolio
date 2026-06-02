import { motion } from "framer-motion";
import { Github, Linkedin, Code2, ArrowRight, Download, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-page">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full hairline px-3 py-1 text-xs text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Available for Internships & Full-time Roles
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance leading-[1.05]">
              Tiruvidhula <br className="hidden sm:block" />
              <span className="text-primary">Sai Harish</span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-muted-foreground font-medium">
              Aspiring Software Engineer
            </p>

            <p className="mt-6 max-w-xl text-base md:text-[17px] text-muted-foreground leading-relaxed">
              Frontend Developer and Computer Science undergraduate passionate about
              building responsive and modern web applications using React.js, JavaScript,
              Python, and Flask.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md hairline bg-surface px-5 py-2.5 text-sm font-medium text-foreground hover:bg-surface-elevated transition"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5 text-muted-foreground">
              <a
                aria-label="GitHub"
                href="https://github.com/saiharish14"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/saiharish-tiruvidhula/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                aria-label="LeetCode"
                href="https://leetcode.com/u/saiharish14/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition"
              >
                <Code2 className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className="relative h-64 w-64 sm:h-80 sm:w-80">
              <div className="absolute inset-0 rounded-2xl hairline bg-surface" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="text-7xl sm:text-8xl font-semibold tracking-tight text-primary">
                    SH
                  </div>
                  <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                    Sai Harish · CSE '27
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 rounded-md hairline bg-surface-elevated px-3 py-1.5 text-xs text-muted-foreground font-mono">
                Guntur, AP
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
