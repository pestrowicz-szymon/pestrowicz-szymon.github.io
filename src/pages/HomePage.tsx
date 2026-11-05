import HeroSection from "../components/sections/HeroSection";
import EducationSection from "../components/sections/EducationSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ProjectsSection from "../components/sections/ProjectsSection";

function HomePage() {
    
  return (
    <main className="flex-1 min-h-0 md:snap-y md:snap-mandatory h-full overflow-y-auto scroll-smooth bg-slate-950 text-slate-100">
      
      <HeroSection />

      <EducationSection />

      <ExperienceSection />

      <ProjectsSection />

    </main>
  )
}

export default HomePage