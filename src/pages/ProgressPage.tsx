import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Trophy, Target, TrendingUp, Calendar, Play } from "lucide-react";
import { Link } from "react-router-dom";

const ProgressPage = () => {
  const overallProgress = 75;
  const currentStreak = 12;
  const totalHours = 25;
  const averageScore = 88;

  const keyMetrics = [
    {
      title: "Modules Completed",
      value: "15/20",
      percentage: 75,
      icon: BookOpen,
      color: "text-primary"
    },
    {
      title: "Average Quiz Score", 
      value: "88%",
      percentage: 88,
      icon: Trophy,
      color: "text-success"
    },
    {
      title: "Time Spent Learning",
      value: "25 hours",
      percentage: 60,
      icon: Clock,
      color: "text-warning"
    },
    {
      title: "Current Streak",
      value: "12 days",
      percentage: 80,
      icon: TrendingUp,
      color: "text-primary"
    }
  ];

  const upcomingModules = [
    {
      id: 1,
      title: "Module 6: Advanced Grammar",
      description: "Learn complex sentence structures and advanced grammatical concepts.",
      dueDate: "July 15",
      duration: "45 min",
      icon: BookOpen
    },
    {
      id: 2,
      title: "Module 7: Business English",
      description: "Professional communication skills for workplace settings.",
      dueDate: "July 22", 
      duration: "60 min",
      icon: Target
    },
    {
      id: 3,
      title: "Module 8: Cultural Exchange",
      description: "Understanding cultural contexts in English-speaking countries.",
      dueDate: "July 29",
      duration: "40 min", 
      icon: Calendar
    }
  ];

  const recentActivity = [
    {
      type: "lesson",
      title: "Completed: Conditional Sentences",
      timestamp: "2 hours ago",
      score: 92
    },
    {
      type: "quiz",
      title: "Quiz: Past Perfect Tense",
      timestamp: "1 day ago", 
      score: 85
    },
    {
      type: "module",
      title: "Finished: Module 5 - Intermediate Grammar",
      timestamp: "3 days ago",
      score: 90
    },
    {
      type: "achievement",
      title: "Achievement Unlocked: Grammar Master",
      timestamp: "1 week ago",
      score: null
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "lesson": return Play;
      case "quiz": return Trophy;
      case "module": return BookOpen;
      case "achievement": return Target;
      default: return BookOpen;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case "lesson": return "text-blue-600";
      case "quiz": return "text-green-600";
      case "module": return "text-purple-600";
      case "achievement": return "text-yellow-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">My Progress</h1>
          <p className="text-muted-foreground">
            Track your learning journey and celebrate your achievements.
          </p>
        </div>

        {/* Overall Progress Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Overall Course Progress
            </CardTitle>
            <CardDescription>
              You're doing great! Keep up the momentum.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm text-muted-foreground">{overallProgress}%</span>
                </div>
                <Progress value={overallProgress} className="h-3" />
              </div>
              <p className="text-sm text-muted-foreground">
                You've completed {Math.floor(overallProgress * 20 / 100)} out of 20 modules. 
                Only {20 - Math.floor(overallProgress * 20 / 100)} modules left to finish your course!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {keyMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {metric.title}
                    </CardTitle>
                    <IconComponent className={`h-5 w-5 ${metric.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <Progress value={metric.percentage} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Upcoming Modules */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Upcoming Modules
              </CardTitle>
              <CardDescription>
                Your next learning milestones
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingModules.map((module) => {
                const IconComponent = module.icon;
                return (
                  <div key={module.id} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm mb-1">{module.title}</h4>
                      <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                        {module.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Due: {module.dueDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {module.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
              <Button variant="outline" className="w-full" asChild>
                <Link to="/courses">View All Modules</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Your latest learning achievements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => {
                const IconComponent = getActivityIcon(activity.type);
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-gray-100 ${getActivityColor(activity.type)}`}>
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm font-medium">{activity.title}</p>
                          <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                        </div>
                        {activity.score && (
                          <Badge variant="secondary" className="text-xs">
                            {activity.score}%
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ProgressPage;