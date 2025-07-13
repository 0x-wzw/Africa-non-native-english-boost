import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, Mail, Lock, User, Eye, EyeOff, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
    agreeToTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup attempt:", formData);
  };

  const nigerCities = [
    "Niamey", "Zinder", "Maradi", "Agadez", "Tahoua", 
    "Dosso", "Tillabéri", "Diffa", "Arlit", "Gaya"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 group">
            <div className="p-3 bg-gradient-to-br from-primary to-primary-hover rounded-xl group-hover:shadow-lg transition-all duration-300">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">EduNiger</span>
              <span className="text-sm text-muted-foreground -mt-1">English Learning</span>
            </div>
          </Link>
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-bold">Join EduNiger</CardTitle>
            <CardDescription>
              Create your account and start learning English today
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name Field */}
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="pl-9 h-12 bg-muted/30"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="pl-9 h-12 bg-muted/30"
                    required
                  />
                </div>
              </div>

              {/* Location Field */}
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
                  <Select onValueChange={(value) => handleInputChange("location", value)}>
                    <SelectTrigger className="pl-9 h-12 bg-muted/30">
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      {nigerCities.map((city) => (
                        <SelectItem key={city} value={city.toLowerCase()}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="pl-9 pr-12 h-12 bg-muted/30"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 w-10"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="pl-9 pr-12 h-12 bg-muted/30"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 w-10"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                  className="mt-1"
                />
                <Label htmlFor="terms" className="text-sm leading-5">
                  I agree to the{" "}
                  <Link to="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              {/* Sign Up Button */}
              <Button 
                type="submit" 
                className="w-full h-12 text-base font-semibold"
                variant="cta"
                disabled={!formData.agreeToTerms}
              >
                Create Account
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <Separator />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-background px-4 text-sm text-muted-foreground">or</span>
              </div>
            </div>

            {/* Social Signup Options */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full h-12" type="button">
                <div className="w-5 h-5 mr-3 bg-blue-600 rounded"></div>
                Sign up with Google
              </Button>
              <Button variant="outline" className="w-full h-12" type="button">
                <div className="w-5 h-5 mr-3 bg-blue-800 rounded"></div>
                Sign up with Facebook
              </Button>
            </div>

            {/* Login Link */}
            <div className="text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link 
                to="/login" 
                className="text-primary font-semibold hover:underline"
              >
                Log In
              </Link>
            </div>

            {/* Benefits */}
            <div className="bg-muted/30 rounded-lg p-4 space-y-2">
              <h4 className="font-semibold text-sm">What you'll get:</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Access to all beginner courses for free</li>
                <li>• Personalized learning dashboard</li>
                <li>• Progress tracking and certificates</li>
                <li>• Community support from fellow learners</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Guest Access */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Want to explore first?
          </p>
          <Button variant="ghost" asChild>
            <Link to="/courses">Browse Courses as Guest</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;