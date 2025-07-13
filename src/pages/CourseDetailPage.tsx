import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  Play, 
  Download, 
  ChevronRight,
  CheckCircle,
  Circle
} from "lucide-react";
import { useParams, Link } from "react-router-dom";

const CourseDetailPage = () => {
  const { id } = useParams();

  // Mock course data
  const course = {
    id: "english-beginners",
    title: "English for Beginners: Level A1",
    description: "This course is designed for individuals with no prior knowledge of English. You will learn basic vocabulary, grammar, and conversational skills to start communicating effectively.",
    fullDescription: `Welcome to the English for Beginners course! This comprehensive program is tailored for individuals in Niger who are new to the English language. Our goal is to provide you with a solid foundation in English, covering essential vocabulary, grammar, and practical conversational skills. By the end of this course, you will be able to understand and use familiar everyday expressions and very basic phrases aimed at the satisfaction of needs of a concrete type. You will also be able to introduce yourself and others and can ask and answer questions about personal details such as where you live, people you know, and things you have. This course is designed to be interactive and engaging, with plenty of opportunities to practice your new skills through exercises, quizzes, and real-life scenarios.`,
    level: "A1 (Beginner)",
    duration: "8 weeks",
    modules: 4,
    lessons: 20,
    students: 450,
    rating: 4.8,
    reviews: 150,
    instructor: {
      name: "Dr. Aisha Diallo",
      bio: "Dr. Diallo is a seasoned English language instructor with over 10 years of experience teaching English as a foreign language. She holds a PhD in Linguistics and is passionate about helping students achieve their language learning goals.",
      avatar: "/placeholder.svg"
    },
    price: "Free",
    enrolled: true,
    progress: 25,
    syllabus: [
      {
        id: 1,
        title: "Module 1: Introduction to English",
        lessons: [
          { id: 1, title: "Greetings and Introductions", duration: "15 min", completed: true },
          { id: 2, title: "Alphabet and Pronunciation", duration: "20 min", completed: true },
          { id: 3, title: "Numbers and Counting", duration: "18 min", completed: false },
          { id: 4, title: "Basic Phrases", duration: "22 min", completed: false }
        ],
        expanded: true
      },
      {
        id: 2,
        title: "Module 2: Basic Grammar and Vocabulary", 
        lessons: [
          { id: 5, title: "Nouns and Articles", duration: "25 min", completed: false },
          { id: 6, title: "Present Tense Verbs", duration: "30 min", completed: false },
          { id: 7, title: "Adjectives and Descriptions", duration: "20 min", completed: false },
          { id: 8, title: "Question Formation", duration: "28 min", completed: false }
        ],
        expanded: false
      },
      {
        id: 3,
        title: "Module 3: Conversational English",
        lessons: [
          { id: 9, title: "Daily Conversations", duration: "35 min", completed: false },
          { id: 10, title: "Shopping and Money", duration: "40 min", completed: false },
          { id: 11, title: "Directions and Transportation", duration: "30 min", completed: false },
          { id: 12, title: "Food and Restaurants", duration: "32 min", completed: false }
        ],
        expanded: false
      },
      {
        id: 4,
        title: "Module 4: Everyday English",
        lessons: [
          { id: 13, title: "Time and Dates", duration: "25 min", completed: false },
          { id: 14, title: "Weather and Seasons", duration: "20 min", completed: false },
          { id: 15, title: "Family and Relationships", duration: "28 min", completed: false },
          { id: 16, title: "Hobbies and Interests", duration: "30 min", completed: false }
        ],
        expanded: false
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link to="/courses" className="hover:text-primary">Courses</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/courses" className="hover:text-primary">English for Beginners</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Module 1: Greetings</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-green-100 text-green-800">{course.level}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  {course.rating} ({course.reviews} reviews)
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-foreground mb-4">{course.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{course.description}</p>

              {/* Course Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">{course.duration}</div>
                  <div className="text-xs text-muted-foreground">Duration</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <BookOpen className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">{course.lessons} lessons</div>
                  <div className="text-xs text-muted-foreground">Total Lessons</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">{course.students}+</div>
                  <div className="text-xs text-muted-foreground">Students</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Star className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">{course.rating}/5</div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
              </div>

              {/* Progress Bar (if enrolled) */}
              {course.enrolled && (
                <Card className="mb-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">Module Progress</CardTitle>
                    <CardDescription>25% Complete</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Progress value={course.progress} className="mb-2" />
                    <p className="text-sm text-muted-foreground">
                      You've completed 5 out of 20 lessons. Keep going!
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Course Description */}
            <Card>
              <CardHeader>
                <CardTitle>Course Details</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {course.fullDescription}
                </p>
              </CardContent>
            </Card>

            {/* Instructor */}
            <Card>
              <CardHeader>
                <CardTitle>Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={course.instructor.avatar} />
                    <AvatarFallback>{course.instructor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{course.instructor.name}</h3>
                    <p className="text-muted-foreground">{course.instructor.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Module Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Module Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Transcript
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Vocabulary List
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Pronunciation Guide
                </Button>
              </CardContent>
            </Card>

            {/* Syllabus */}
            <Card>
              <CardHeader>
                <CardTitle>Syllabus</CardTitle>
                <CardDescription>Course curriculum and lessons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {course.syllabus.map((module) => (
                  <div key={module.id} className="space-y-2">
                    <div className="font-medium text-sm flex items-center justify-between">
                      <span>{module.title}</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    {module.expanded && (
                      <div className="space-y-2 ml-4">
                        {module.lessons.map((lesson) => (
                          <div key={lesson.id} className="flex items-center gap-2 text-xs text-muted-foreground">
                            {lesson.completed ? (
                              <CheckCircle className="h-4 w-4 text-success" />
                            ) : (
                              <Circle className="h-4 w-4" />
                            )}
                            <span className="flex-1">{lesson.title}</span>
                            <span>{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Enrollment CTA */}
            {!course.enrolled ? (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div>
                      <div className="text-3xl font-bold text-primary">{course.price}</div>
                      {course.price !== "Free" && (
                        <div className="text-sm text-muted-foreground">One-time payment</div>
                      )}
                    </div>
                    <Button variant="cta" size="lg" className="w-full">
                      Enroll Now
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      30-day money-back guarantee
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <Button variant="default" size="lg" className="w-full mb-3">
                    <Play className="h-4 w-4 mr-2" />
                    Continue Learning
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Certificate
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetailPage;