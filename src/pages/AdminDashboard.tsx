import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  UserCheck, 
  UserPlus,
  GraduationCap
} from "lucide-react";
import { Link } from "react-router-dom";
import { StatsCards } from "@/components/admin/StatsCards";
import { UserManagement } from "@/components/admin/UserManagement";
import { CourseManagement } from "@/components/admin/CourseManagement";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,250",
      change: "+15%",
      changeType: "positive" as const,
      icon: Users
    },
    {
      title: "Active Courses", 
      value: "15",
      change: "+2",
      changeType: "positive" as const, 
      icon: BookOpen
    },
    {
      title: "Enrollments",
      value: "850", 
      change: "+12%",
      changeType: "positive" as const,
      icon: UserCheck
    },
    {
      title: "Course Completion",
      value: "85%",
      change: "+5%", 
      changeType: "positive" as const,
      icon: TrendingUp
    }
  ];

  const recentUsers = [
    {
      id: "user123",
      name: "Fatima Diallo",
      email: "fatima.diallo@email.com",
      role: "Student",
      status: "Active",
      joinDate: "2 days ago"
    },
    {
      id: "admin001", 
      name: "Moussa Traore",
      email: "moussa.traore@email.com",
      role: "Admin",
      status: "Active", 
      joinDate: "1 week ago"
    },
    {
      id: "instructor456",
      name: "Aisha Kone",
      email: "aisha.kone@email.com", 
      role: "Instructor",
      status: "Active",
      joinDate: "2 weeks ago"
    },
    {
      id: "user456",
      name: "Amadou Sissoko",
      email: "amadou.sissoko@email.com",
      role: "Student", 
      status: "Inactive",
      joinDate: "3 weeks ago"
    },
    {
      id: "user789",
      name: "Mariam Cisse",
      email: "mariam.cisse@email.com",
      role: "Student",
      status: "Active",
      joinDate: "1 month ago"
    }
  ];

  const courses = [
    {
      id: "english-beginners",
      title: "English for Beginners",
      description: "A foundational course for learning English.",
      instructor: "Aisha Diallo",
      status: "Active",
      enrollments: 450
    },
    {
      id: "intermediate-english",
      title: "Intermediate English", 
      description: "Enhance your English skills with this course.",
      instructor: "Mamadou Sissoko",
      status: "Active",
      enrollments: 320
    },
    {
      id: "advanced-english",
      title: "Advanced English",
      description: "Master advanced English concepts.",
      instructor: "Fatima Traore", 
      status: "Inactive",
      enrollments: 200
    },
    {
      id: "business-english",
      title: "Business English",
      description: "Learn English for professional settings.",
      instructor: "Oumar Coulibaly",
      status: "Active", 
      enrollments: 280
    },
    {
      id: "conversational-english",
      title: "Conversational English",
      description: "Improve your conversational skills.",
      instructor: "Aminata Kane",
      status: "Active",
      enrollments: 350
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-primary" />
              EduNiger Admin
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage your English learning platform
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link to="/admin/content">
                <BookOpen className="h-4 w-4 mr-2" />
                Content Management
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/admin/users/new">
                <UserPlus className="h-4 w-4 mr-2" />
                Add User
              </Link>
            </Button>
            <Button variant="cta" asChild>
              <Link to="/admin/courses/new">
                <BookOpen className="h-4 w-4 mr-2" />
                New Course
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <StatsCards stats={stats} />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* User Management */}
          <UserManagement users={recentUsers} />

          {/* Course Management */}
          <CourseManagement courses={courses} />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;