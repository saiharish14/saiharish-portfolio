import { motion } from "framer-motion";
import { Github, Linkedin, Code2, ArrowRight, Eye, Download, Mail } from "lucide-react";
import profileAsset from "@/assets/profile-pro.jpeg.asset.json";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import { RoleRotator } from "./RoleRotator";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-12 md:pt-32 md:pb-16">
      <div className="container-page">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 rounded-full hairline px-3 py-1 text-xs text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Available for Internships & Full-time Roles
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance leading-[1.05]">
              Tiruvidhula <br className="hidden sm:block" />
              <span className="text-primary">Sai Harish</span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-foreground/90 font-medium">
              <RoleRotator />
            </p>

            <p className="mt-5 max-w-xl text-base md:text-[17px] text-muted-foreground leading-relaxed">
              Frontend Developer and Computer Science undergraduate passionate about
              building responsive and modern web applications using React.js, JavaScript,
              Python, and Flask.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={resumeAsset.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md hairline bg-surface px-5 py-2.5 text-sm font-medium text-foreground hover:bg-surface-elevated transition"
              >
                <Eye className="h-4 w-4" /> View Resume
              </a>
              <a
                href={resumeAsset.url}
                download="Sai_Harish_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md hairline bg-surface px-5 py-2.5 text-sm font-medium text-foreground hover:bg-surface-elevated transition"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5 text-muted-foreground">
              <a aria-label="GitHub" href="https://github.com/saiharish14" target="_blank" rel="noreferrer" className="hover:text-foreground transition">
                <Github className="h-5 w-5" />
              </a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/saiharish-tiruvidhula/" target="_blank" rel="noreferrer" className="hover:text-foreground transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a aria-label="LeetCode" href="https://leetcode.com/u/saiharish14/" target="_blank" rel="noreferrer" className="hover:text-foreground transition">
                <Code2 className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="order-1 lg:order-2 relative mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className="relative h-56 w-56 sm:h-72 sm:w-72 md:h-80 md:w-80">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-2xl hairline bg-surface">
                <img
                  src={profileAsset.url}
                  alt="Tiruvidhula Sai Harish"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
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
