import { Github, Linkedin, Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="text-sm font-medium text-foreground">
            Tiruvidhula Sai Harish
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} · Built with React, Tailwind & Framer Motion.
          </div>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            aria-label="GitHub"
            href="https://github.com/saiharish14"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/saiharish-tiruvidhula/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            aria-label="LeetCode"
            href="https://leetcode.com/u/saiharish14/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition"
          >
            <Code2 className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
