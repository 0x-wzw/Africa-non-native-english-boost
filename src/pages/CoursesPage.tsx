import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BookOpen, Clock, Users, Star, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const CoursesPage = () => {
  const courses = [
    {
      id: "english-beginners",
      title: "English for Beginners",
      description: "A foundational course for learning English vocabulary, grammar, and conversational skills for everyday situations.",
      level: "Beginner",
      levelCode: "A1",
      duration: "8 weeks",
      modules: 4,
      lessons: 20,
      students: 450,
      rating: 4.8,
      instructor: "Dr. Aisha Diallo",
      price: "Free",
      status: "Active",
      image: "/placeholder.svg",
      tags: ["Grammar", "Vocabulary", "Speaking", "Listening"]
    },
    {
      id: "intermediate-english", 
      title: "Intermediate English",
      description: "Enhance your English skills with this comprehensive course covering advanced grammar, vocabulary, and conversational topics.",
      level: "Intermediate",
      levelCode: "B1",
      duration: "10 weeks",
      modules: 5,
      lessons: 25,
      students: 320,
      rating: 4.7,
      instructor: "Mamadou Sissoko",
      price: "₦15,000",
      status: "Active",
      image: "/placeholder.svg",
      tags: ["Advanced Grammar", "Conversation", "Writing", "Business English"]
    },
    {
      id: "advanced-english",
      title: "Advanced English",
      description: "Master advanced English concepts including complex grammar, nuanced vocabulary, and professional communication.",
      level: "Advanced",
      levelCode: "C1",
      duration: "12 weeks",
      modules: 6,
      lessons: 30,
      students: 200,
      rating: 4.9,
      instructor: "Fatima Traore",
      price: "₦25,000",
      status: "Inactive",
      image: "/placeholder.svg",
      tags: ["Academic English", "Professional Writing", "Advanced Grammar", "Fluency"]
    },
    {
      id: "business-english",
      title: "Business English",
      description: "Learn English for professional settings including meetings, presentations, and formal communication.",
      level: "Intermediate",
      levelCode: "B2",
      duration: "8 weeks",
      modules: 4,
      lessons: 16,
      students: 280,
      rating: 4.8,
      instructor: "Oumar Coulibaly",
      price: "₦20,000",
      status: "Active",
      image: "/placeholder.svg",
      tags: ["Business Communication", "Presentations", "Meetings", "Email Writing"]
    },
    {
      id: "conversational-english",
      title: "Conversational English",
      description: "Improve your conversational skills with practical speaking exercises and real-world scenarios.",
      level: "Intermediate",
      levelCode: "B1",
      duration: "6 weeks",
      modules: 3,
      lessons: 18,
      students: 350,
      rating: 4.6,
      instructor: "Aminata Kane",
      price: "₦12,000",
      status: "Active", 
      image: "/placeholder.svg",
      tags: ["Speaking", "Pronunciation", "Cultural Context", "Confidence Building"]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-blue-100 text-blue-800";
      case "Advanced": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "Active" ? "bg-success text-success-foreground" : "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">English Courses</h1>
              <p className="text-muted-foreground">
                Choose a course that matches your proficiency level and start learning today.
              </p>
            </div>
            <Button variant="cta" size="lg" asChild>
              <Link to="/admin/courses/new">New Course</Link>
            </Button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses by title, instructor, or content..."
                className="pl-9"
              />
            </div>
            <Button variant="outline" className="sm:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              Filter Courses
            </Button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex gap-2">
                    <Badge className={getLevelColor(course.level)}>
                      {course.levelCode}
                    </Badge>
                    <Badge className={getStatusColor(course.status)}>
                      {course.status}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      {course.rating}
                    </div>
                  </div>
                </div>

                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Course Stats */}
                <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {course.lessons} lessons
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students}+
                  </div>
                </div>

                {/* Instructor */}
                <div className="text-sm">
                  <span className="text-muted-foreground">Instructor: </span>
                  <span className="font-medium">{course.instructor}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {course.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {course.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{course.tags.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                    {course.price !== "Free" && (
                      <span className="text-sm text-muted-foreground ml-1">/course</span>
                    )}
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/courses/${course.id}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CoursesPage;