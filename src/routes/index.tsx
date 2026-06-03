import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Certifications } from "@/components/portfolio/Certifications";
import { CodingProfiles } from "@/components/portfolio/CodingProfiles";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tiruvidhula Sai Harish — Aspiring Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Tiruvidhula Sai Harish — CSE undergraduate and frontend developer building modern web apps with React, JavaScript, Python and Flask.",
      },
      { property: "og:title", content: "Tiruvidhula Sai Harish — Aspiring Software Engineer" },
      {
        property: "og:description",
        content:
          "Frontend developer and Computer Science undergraduate. Projects, skills, and contact.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
