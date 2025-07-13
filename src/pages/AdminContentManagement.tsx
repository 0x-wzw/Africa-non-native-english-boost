import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Plus, 
  Edit, 
  Trash2, 
  Upload, 
  Video, 
  AudioLines, 
  FileText, 
  Image,
  Play,
  Download,
  Eye,
  Search,
  Filter
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const AdminContentManagement = () => {
  const courses = [
    {
      id: "english-beginners",
      title: "English for Beginners",
      level: "Beginner",
      status: "Published",
      lessons: 12,
      enrollments: 450,
      lastUpdated: "2 days ago"
    },
    {
      id: "intermediate-english",
      title: "Intermediate English",
      level: "Intermediate", 
      status: "Draft",
      lessons: 8,
      enrollments: 0,
      lastUpdated: "1 week ago"
    }
  ];

  const contentItems = [
    {
      id: "lesson-1-video",
      title: "Introduction to Basic Greetings",
      type: "video",
      course: "English for Beginners",
      size: "45.2 MB",
      duration: "8:30",
      status: "Published"
    },
    {
      id: "lesson-1-audio",
      title: "Pronunciation Practice - Greetings",
      type: "audio",
      course: "English for Beginners", 
      size: "12.8 MB",
      duration: "5:15",
      status: "Published"
    },
    {
      id: "lesson-1-pdf",
      title: "Grammar Rules - Present Tense",
      type: "pdf",
      course: "English for Beginners",
      size: "2.1 MB",
      duration: "—",
      status: "Published"
    },
    {
      id: "lesson-2-exercise",
      title: "Interactive Exercise - Vocabulary",
      type: "interactive",
      course: "English for Beginners",
      size: "1.5 MB", 
      duration: "10:00",
      status: "Draft"
    }
  ];

  const getContentIcon = (type: string) => {
    switch (type) {
      case "video": return Video;
      case "audio": return AudioLines;
      case "pdf": return FileText;
      case "interactive": return Play;
      case "image": return Image;
      default: return FileText;
    }
  };

  const getStatusColor = (status: string) => {
    return status === "Published" ? "bg-success text-success-foreground" : "bg-warning text-warning-foreground";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" />
              Content Management
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage courses, lessons, and learning materials
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Bulk Upload
            </Button>
            <Button variant="cta">
              <Plus className="h-4 w-4 mr-2" />
              New Content
            </Button>
          </div>
        </div>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="content">Content Library</TabsTrigger>
            <TabsTrigger value="upload">Upload Content</TabsTrigger>
          </TabsList>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Course Management</CardTitle>
                    <CardDescription>
                      Create and manage course structure and settings
                    </CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Course
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {/* Search and Filters */}
                <div className="flex gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search courses..." className="pl-9" />
                  </div>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Courses List */}
                <div className="space-y-4">
                  {courses.map((course) => (
                    <div key={course.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold">{course.title}</h3>
                            <Badge variant="secondary">{course.level}</Badge>
                            <Badge className={getStatusColor(course.status)} variant="secondary">
                              {course.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground flex gap-6">
                            <span>{course.lessons} lessons</span>
                            <span>{course.enrollments} enrolled</span>
                            <span>Updated {course.lastUpdated}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Library Tab */}
          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Content Library</CardTitle>
                    <CardDescription>
                      Manage all learning materials and resources
                    </CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Content
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {/* Filters */}
                <div className="flex gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search content..." className="pl-9" />
                  </div>
                  <Select>
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Content type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="video">Videos</SelectItem>
                      <SelectItem value="audio">Audio</SelectItem>
                      <SelectItem value="pdf">PDFs</SelectItem>
                      <SelectItem value="interactive">Interactive</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Courses</SelectItem>
                      <SelectItem value="beginners">English for Beginners</SelectItem>
                      <SelectItem value="intermediate">Intermediate English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Content Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {contentItems.map((item) => {
                    const IconComponent = getContentIcon(item.type);
                    return (
                      <div key={item.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium truncate">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.course}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Size:</span>
                            <span>{item.size}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Duration:</span>
                            <span>{item.duration}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Status:</span>
                            <Badge className={getStatusColor(item.status)} variant="secondary">
                              {item.status}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-4">
                          <Button variant="ghost" size="sm" className="flex-1">
                            <Eye className="h-4 w-4 mr-1" />
                            Preview
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Upload Content Tab */}
          <TabsContent value="upload" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload New Content</CardTitle>
                <CardDescription>
                  Add videos, audio files, PDFs, and interactive exercises
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="title">Content Title</Label>
                    <Input id="title" placeholder="Enter content title" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course">Course</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginners">English for Beginners</SelectItem>
                        <SelectItem value="intermediate">Intermediate English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="type">Content Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select content type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">Video (.mp4, .webm)</SelectItem>
                        <SelectItem value="audio">Audio (.mp3, .wav)</SelectItem>
                        <SelectItem value="pdf">PDF Document</SelectItem>
                        <SelectItem value="interactive">Interactive Exercise</SelectItem>
                        <SelectItem value="image">Image (.jpg, .png)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lesson">Lesson Number</Label>
                    <Input id="lesson" type="number" placeholder="1" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe the content and learning objectives"
                    rows={3}
                  />
                </div>

                {/* File Upload Area */}
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Upload Content File</h3>
                  <p className="text-muted-foreground mb-4">
                    Drag and drop your file here, or click to browse
                  </p>
                  <Button variant="outline">
                    Choose File
                  </Button>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p>Supported formats:</p>
                    <p>Videos: MP4, WebM (max 500MB)</p>
                    <p>Audio: MP3, WAV (max 100MB)</p>
                    <p>Documents: PDF (max 50MB)</p>
                    <p>Images: JPG, PNG (max 10MB)</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1" variant="cta">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Content
                  </Button>
                  <Button variant="outline">
                    Save as Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminContentManagement;