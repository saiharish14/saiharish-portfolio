import { Github, Linkedin, Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container-page py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <div className="text-base font-semibold text-foreground tracking-tight">
            Sai Harish
          </div>
          <div className="text-xs font-medium text-primary/80">
            Frontend Developer | Aspiring Software Engineer
          </div>
          <div className="text-xs text-muted-foreground mt-2">
            &copy; 2026 Sai Harish. All Rights Reserved.
          </div>
          <div className="text-[11px] text-muted-foreground/50">
            Designed & Developed by Sai Harish
          </div>
        </div>
        <div className="flex items-center gap-5 text-muted-foreground">
          <a
            aria-label="GitHub"
            href="https://github.com/saiharish14"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-200"
          >
            <Github className="h-[18px] w-[18px]" />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/sai-harish-tiruvidhula-076541427/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-200"
          >
            <Linkedin className="h-[18px] w-[18px]" />
          </a>
          <a
            aria-label="LeetCode"
            href="https://leetcode.com/u/saiharish14/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-200"
          >
            <Code2 className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
