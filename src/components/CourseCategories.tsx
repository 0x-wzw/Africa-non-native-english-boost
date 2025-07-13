import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, MessageCircle, Briefcase, Users, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const CourseCategories = () => {
  const categories = [
    {
      id: "beginner",
      title: "English for Beginners",
      description: "Start your English journey with basic vocabulary, grammar, and conversational skills.",
      level: "A1-A2",
      duration: "8-12 weeks",
      students: "450+",
      rating: 4.8,
      icon: BookOpen,
      color: "from-green-500 to-emerald-600",
      features: ["Basic Grammar", "Everyday Vocabulary", "Simple Conversations", "Pronunciation Practice"]
    },
    {
      id: "everyday",
      title: "Everyday English",
      description: "Learn practical English for daily conversations, shopping, and social interactions.",
      level: "B1",
      duration: "6-10 weeks", 
      students: "320+",
      rating: 4.7,
      icon: MessageCircle,
      color: "from-blue-500 to-cyan-600",
      features: ["Daily Conversations", "Cultural Context", "Listening Skills", "Real-world Scenarios"]
    },
    {
      id: "business",
      title: "Business English",
      description: "Improve your English for professional settings, meetings, and career advancement.",
      level: "B2-C1",
      duration: "10-14 weeks",
      students: "280+", 
      rating: 4.9,
      icon: Briefcase,
      color: "from-purple-500 to-violet-600",
      features: ["Professional Communication", "Meeting Skills", "Email Writing", "Presentation Skills"]
    },
    {
      id: "advanced",
      title: "Advanced English",
      description: "Master advanced English language skills including nuanced vocabulary and complex grammar.",
      level: "C1-C2",
      duration: "12-16 weeks",
      students: "200+",
      rating: 4.9,
      icon: Users,
      color: "from-orange-500 to-red-600",
      features: ["Advanced Grammar", "Academic Writing", "Critical Thinking", "Fluency Development"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Choose Your Path
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            English Courses for Every Level
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're just starting or looking to perfect your English, we have the right course for your goals.
            All courses are designed with Niger speakers in mind.
          </p>
        </div>

        {/* Course Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        {category.rating}
                      </div>
                      <div className="text-xs text-muted-foreground">{category.students} students</div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 space-y-4">
                  {/* Course Info */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <BookOpen className="h-4 w-4 mr-1" />
                      Level: {category.level}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {category.duration}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">What you'll learn:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                      {category.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                      asChild
                    >
                      <Link to={`/courses/${category.id}`}>
                        Explore Course
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button variant="cta" size="xl" asChild>
            <Link to="/courses">
              View All Courses
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;