'use client';

import { signIn, getSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Shield, Sparkles, Lock, User } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid credentials");
      } else {
        // Check session and redirect
        const session = await getSession();
        if (session) {
          router.push("/admin");
          router.refresh();
        }
      }
    } catch (error) {
      setError("An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Global gradient background */}
      <div className="fixed inset-0 animated-gradient-light dark:animated-gradient-dark opacity-10 pointer-events-none" />
      
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          >
            <div 
              className={`w-${4 + i} h-${4 + i} opacity-20`}
              style={{
                background: `linear-gradient(45deg, 
                  ${i % 3 === 0 ? '#8b5cf6' : i % 3 === 1 ? '#ec4899' : '#06b6d4'}, 
                  ${i % 3 === 0 ? '#ec4899' : i % 3 === 1 ? '#06b6d4' : '#8b5cf6'})`,
                borderRadius: i % 2 === 0 ? '50%' : '20%',
                transform: `rotate(${i * 60}deg)`
              }}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/80 backdrop-blur-xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />
          
          <CardHeader className="text-center relative z-10 pb-8">
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center animate-pulse-glow">
              <Shield className="w-8 h-8 text-white" />
            </div>
            
            <CardTitle className="text-3xl font-bold gradient-text-purple-pink">
              Admin Portal
            </CardTitle>
            <CardDescription className="flex items-center justify-center mt-2">
              <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
              Secure access to your portfolio dashboard
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6 relative z-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 border-purple-200/30 focus:border-purple-400 bg-background/50"
                  required
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 border-purple-200/30 focus:border-purple-400 bg-background/50"
                  required
                />
              </div>
              {error && (
                <div className="text-red-500 text-sm text-center bg-red-50 dark:bg-red-900/20 p-3 rounded-md border border-red-200 dark:border-red-800">
                  {error}
                </div>
              )}
              <Button 
                type="submit" 
                className="w-full relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-purple-200/30" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-4 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button
                onClick={() => signIn("github", { callbackUrl: "/admin" })}
                variant="outline"
                className="w-full py-6 text-lg border-purple-200/50 hover:border-purple-400 hover:bg-purple-500/10 font-medium transition-all duration-300 group"
              >
                <Github className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Continue with GitHub
              </Button>
              
              <Button
                onClick={() => signIn("google", { callbackUrl: "/admin" })}
                variant="outline"
                className="w-full py-6 text-lg border-purple-200/50 hover:border-purple-400 hover:bg-purple-500/10 font-medium transition-all duration-300 group"
              >
                <div className="w-5 h-5 mr-3 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold group-hover:scale-110 transition-transform">
                  G
                </div>
                Continue with Google
              </Button>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Secure OAuth Authentication</span>
              </div>
              
              <div className="p-4 bg-purple-50/50 dark:bg-purple-900/20 rounded-lg border border-purple-200/30">
                <p className="text-sm text-muted-foreground mb-2 font-medium">Demo credentials:</p>
                <p className="font-mono text-xs bg-background/70 p-2 rounded border">
                  Email: attafiahmed.dev@gmail.com<br />
                  Password: admin123
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
