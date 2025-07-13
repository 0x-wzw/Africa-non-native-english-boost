import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CourseCategories from "@/components/CourseCategories";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <CourseCategories />
      </main>
    </div>
  );
};

export default Index;
