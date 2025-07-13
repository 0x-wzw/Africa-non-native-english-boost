import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Search, 
  MoreVertical,
  Edit,
  Trash2,
  Eye
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  status: string;
  enrollments: number;
}

interface CourseManagementProps {
  courses: Course[];
}

export const CourseManagement = ({ courses }: CourseManagementProps) => {
  const getStatusColor = (status: string) => {
    return status === "Active" ? "bg-success text-success-foreground" : "bg-gray-100 text-gray-800";
  };

  return (
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
  );
};