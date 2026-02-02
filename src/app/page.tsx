import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
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
          
          <section id="cv" className="min-h-screen flex items-center justify-center">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-black dark:text-zinc-50 mb-8">CV</h2>
            </div>
          </section>
        </main>
      </div>
    </ParticlesWrapper>
  );
}
