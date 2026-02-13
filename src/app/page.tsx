import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ParticlesWrapper } from "@/components/ui/particles-wrapper";

export default function Home() {
  return (
    <ParticlesWrapper>
      <div className="flex flex-col min-h-screen min-w-0 font-sans pt-14 md:pt-0">
        <Nav />
        <main className="w-full max-w-7xl mx-auto flex-1">
          <section id="about" className="min-h-screen pb-20">
            <Hero />
          </section>
          
          <section id="skills" className="min-h-screen py-20">
            <Skills />
          </section>
          
          <section id="experience" className="min-h-screen pb-20">
            <Experience />
          </section>
          
          <section id="contact" className="min-h-screen py-20 pb-24 md:pb-20">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ParticlesWrapper>
  );
}
