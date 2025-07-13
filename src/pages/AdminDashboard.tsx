import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  UserCheck, 
  Search, 
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  UserPlus,
  GraduationCap
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,250",
      change: "+15%",
      changeType: "positive",
      icon: Users
    },
    {
      title: "Active Courses", 
      value: "15",
      change: "+2",
      changeType: "positive", 
      icon: BookOpen
    },
    {
      title: "Enrollments",
      value: "850", 
      change: "+12%",
      changeType: "positive",
      icon: UserCheck
    },
    {
      title: "Course Completion",
      value: "85%",
      change: "+5%", 
      changeType: "positive",
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

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin": return "bg-purple-100 text-purple-800";
      case "Instructor": return "bg-blue-100 text-blue-800"; 
      case "Student": return "bg-green-100 text-green-800";
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <IconComponent className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className={`text-xs ${stat.changeType === 'positive' ? 'text-success' : 'text-destructive'}`}>
                    {stat.change} from last month
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* User Management */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    User Management
                  </CardTitle>
                  <CardDescription>
                    Manage user accounts, roles, and statuses.
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/admin/users">View All</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search users by username, name, or email"
                  className="pl-9"
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-2 mb-4 text-sm">
                <Button variant="ghost" size="sm" className="h-8">Role</Button>
                <Button variant="ghost" size="sm" className="h-8">Status</Button>
              </div>

              {/* Users Table */}
              <div className="space-y-3">
                <div className="grid grid-cols-6 gap-4 text-xs font-medium text-muted-foreground pb-2 border-b">
                  <span className="col-span-2">Name</span>
                  <span>Role</span>
                  <span>Status</span>
                  <span>Joined</span>
                  <span>Actions</span>
                </div>

                {recentUsers.map((user) => (
                  <div key={user.id} className="grid grid-cols-6 gap-4 text-sm items-center py-2 hover:bg-muted/50 rounded-lg px-2">
                    <div className="col-span-2">
                      <div className="font-medium">{user.name}</div>
                      <div className="text-xs text-muted-foreground">{user.email}</div>
                    </div>
                    <Badge className={getRoleColor(user.role)} variant="secondary">
                      {user.role}
                    </Badge>
                    <Badge className={getStatusColor(user.status)} variant="secondary">
                      {user.status}
                    </Badge>
                    <span className="text-muted-foreground">{user.joinDate}</span>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Course Management */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Courses
                  </CardTitle>
                  <CardDescription>
                    Manage course content and assignments.
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/admin/courses">View All</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses"
                  className="pl-9"
                />
              </div>

              {/* Courses Table */}
              <div className="space-y-3">
                <div className="grid grid-cols-5 gap-4 text-xs font-medium text-muted-foreground pb-2 border-b">
                  <span className="col-span-2">Course Title</span>
                  <span>Instructor</span>
                  <span>Status</span>
                  <span>Actions</span>
                </div>

                {courses.map((course) => (
                  <div key={course.id} className="grid grid-cols-5 gap-4 text-sm items-center py-2 hover:bg-muted/50 rounded-lg px-2">
                    <div className="col-span-2">
                      <div className="font-medium">{course.title}</div>
                      <div className="text-xs text-muted-foreground">{course.description}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {course.enrollments} enrolled
                      </div>
                    </div>
                    <span className="text-muted-foreground">{course.instructor}</span>
                    <Badge className={getStatusColor(course.status)} variant="secondary">
                      {course.status}
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;