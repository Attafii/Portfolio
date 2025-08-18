"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  Send, 
  CheckCircle, 
  Sparkles,
  Gift,
  Users,
  TrendingUp,
  Bell
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Latest Tech Insights",
    description: "Weekly updates on emerging technologies and industry trends"
  },
  {
    icon: Gift,
    title: "Exclusive Resources",
    description: "Free templates, code snippets, and development tools"
  },
  {
    icon: Users,
    title: "Community Access",
    description: "Join a network of developers and tech enthusiasts"
  },
  {
    icon: Bell,
    title: "Project Updates",
    description: "Behind-the-scenes content and project case studies"
  }
];

const stats = [
  { number: "5K+", label: "Subscribers" },
  { number: "98%", label: "Open Rate" },
  { number: "Weekly", label: "Updates" }
];

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setIsLoading(false);
      setIsSubmitted(true);
      setEmail("");

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);

    } catch (error) {
      setIsLoading(false);
      console.error('Newsletter subscription error:', error);
      
      // You could add error state here to show user-friendly error messages
      alert(error instanceof Error ? error.message : 'Failed to subscribe. Please try again.');
    }
  };

  return (
    <section id="newsletter" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-teal-50/50 to-cyan-50/50 dark:from-blue-900/20 dark:via-teal-900/20 dark:to-cyan-900/20" />
        <motion.div
          animate={{ 
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-teal-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -60, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Newsletter</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent"
              >
                Stay
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-block bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent"
              >
                Connected
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Join thousands of developers and tech enthusiasts who get weekly insights, 
              exclusive resources, and behind-the-scenes content delivered to their inbox.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Newsletter Form */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="relative overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-blue-200/50 dark:border-blue-800/50 shadow-2xl">
                <CardContent className="p-8">
                  {!isSubmitted ? (
                    <>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-xl flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">Get Exclusive Updates</h3>
                          <p className="text-muted-foreground text-sm">Join our community of innovators</p>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-12 h-12 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isLoading || !email}
                          className="w-full h-12 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold"
                        >
                          {isLoading ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                          ) : (
                            <>
                              Subscribe Now
                              <Send className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </Button>
                      </form>

                      <div className="mt-6 text-center">
                        <p className="text-xs text-muted-foreground">
                          No spam, ever. Unsubscribe anytime with one click.
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                        {stats.map((stat, index) => (
                          <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                            className="text-center"
                          >
                            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                              {stat.number}
                            </div>
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </motion.div>

                      <h3 className="text-2xl font-bold mb-2 text-green-600">Welcome Aboard!</h3>
                      <p className="text-muted-foreground mb-4">
                        You&apos;ve successfully subscribed to our newsletter. 
                        Check your inbox for a welcome email with exclusive resources.
                      </p>
                      
                      <div className="inline-flex items-center gap-2 text-sm text-green-600 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full">
                        <Gift className="w-4 h-4" />
                        Free starter template pack included!
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  What You&apos;ll Get
                </h3>
                <p className="text-muted-foreground text-lg">
                  Valuable content that helps you stay ahead in the rapidly evolving tech landscape.
                </p>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-blue-50/50 to-teal-50/50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-xl p-6 border border-blue-200/30 dark:border-blue-800/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <blockquote className="text-sm italic text-muted-foreground mb-3">
                      &ldquo;Ahmed&apos;s newsletter is a goldmine of practical insights. The weekly tips have 
                      significantly improved my development workflow and kept me updated on the latest trends.&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-semibold">Eya Khemiri</div>
                      <div className="text-xs text-muted-foreground">Software Developer and Team Leader</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
