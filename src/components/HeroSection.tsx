import { Button } from "@/components/ui/button";
import { Play, BookOpen, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-learning.jpg";

const HeroSection = () => {
  const stats = [
    { icon: BookOpen, label: "Active Courses", value: "15+" },
    { icon: Users, label: "Students Enrolled", value: "1,250+" },
    { icon: Award, label: "Completion Rate", value: "85%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Students learning English"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                🇳🇪 Designed for Niger Speakers
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Unlock Your
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent block">
                  English Potential
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Master English with our self-paced, culturally-tailored courses designed specifically for speakers from Niger. 
              Learn at your own pace with interactive lessons, expert tutors, and real-world practice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="hero" 
                size="xl" 
                className="text-lg font-semibold bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link to="/courses">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Start Learning Today
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="xl" 
                className="text-lg font-semibold bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                asChild
              >
                <Link to="/demo">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Video/Interactive Preview */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Start Your Journey</h3>
                    <p className="text-white/80">Choose your learning path</p>
                  </div>
                  
                  <div className="space-y-4">
                    {["Beginner (A1)", "Intermediate (B1)", "Advanced (C1)"].map((level, index) => (
                      <div 
                        key={level}
                        className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        <div className="text-white">
                          <div className="font-semibold">{level}</div>
                          <div className="text-sm text-white/70">Perfect for {index === 0 ? 'beginners' : index === 1 ? 'improving' : 'mastering'} English</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;