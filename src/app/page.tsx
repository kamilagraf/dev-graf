import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { ParticlesWrapper } from "@/components/ui/particles-wrapper";

export default function Home() {
  return (
    <ParticlesWrapper>
      <div className="flex flex-col min-h-screen font-sans max-w-7xl mx-auto">
        <Nav />
        <main className="w-full">
          <section id="about" className="min-h-screen pb-20">
            <Hero />
          </section>
          
          <section id="skills" className="min-h-screen py-20">
            <Skills />
          </section>
          
          <section id="experience" className="min-h-screen pb-20">
            <Experience />
          </section>
          
          <section id="contact" className="min-h-screen py-20">
            <Contact />
          </section>
        </main>
      </div>
    </ParticlesWrapper>
  );
}
