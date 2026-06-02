import { Section } from "./Section";
import { Github, Linkedin, Code2, ArrowUpRight } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    handle: "@saiharish14",
    href: "https://github.com/saiharish14",
    Icon: Github,
  },
  {
    name: "LinkedIn",
    handle: "saiharish-tiruvidhula",
    href: "https://www.linkedin.com/in/saiharish-tiruvidhula/",
    Icon: Linkedin,
  },
  {
    name: "LeetCode",
    handle: "@saiharish14",
    href: "https://leetcode.com/u/saiharish14/",
    Icon: Code2,
  },
];

export function CodingProfiles() {
  return (
    <Section id="profiles" eyebrow="Profiles" title="Find me online.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map(({ name, handle, href, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-xl hairline bg-surface p-5 hover:bg-surface-elevated transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-background/40 hairline text-foreground">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">{name}</div>
                <div className="text-xs text-muted-foreground font-mono">{handle}</div>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition" />
          </a>
        ))}
      </div>
    </Section>
  );
}
