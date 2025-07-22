"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Users,
  Award,
  Linkedin,
  ExternalLink
} from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  project: string;
  linkedinUrl?: string;
  companyUrl?: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechFlow Solutions",
    avatar: "/testimonials/sarah.jpg",
    content: "Ahmed delivered an exceptional IoT monitoring system that exceeded our expectations. His attention to detail and technical expertise in both hardware and software integration is remarkable. The solution he built has improved our operational efficiency by 40%.",
    rating: 5,
    project: "Industrial IoT Monitoring System",
    linkedinUrl: "https://linkedin.com/in/sarah-johnson",
    companyUrl: "https://techflow.com",
    date: "2024-01-15"
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Product Manager",
    company: "Automotive Innovations",
    avatar: "/testimonials/michael.jpg",
    content: "Working with Ahmed on our automotive software project was a game-changer. His deep understanding of real-time systems and embedded programming helped us deliver a critical feature ahead of schedule. Highly recommended for complex technical projects.",
    rating: 5,
    project: "Automotive Control System",
    linkedinUrl: "https://linkedin.com/in/michael-chen",
    companyUrl: "https://autoinnovations.com",
    date: "2023-12-20"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Lead Developer",
    company: "GreenTech Startup",
    avatar: "/testimonials/emily.jpg",
    content: "Ahmed's full-stack development skills are outstanding. He built our entire web platform from scratch using Next.js and created a beautiful, responsive design. His code quality and documentation made future maintenance a breeze.",
    rating: 5,
    project: "Sustainability Platform",
    linkedinUrl: "https://linkedin.com/in/emily-rodriguez",
    companyUrl: "https://greentech.startup",
    date: "2023-11-10"
  },
  {
    id: "4",
    name: "David Kumar",
    role: "Engineering Director",
    company: "SmartCity Solutions",
    avatar: "/testimonials/david.jpg",
    content: "Ahmed's expertise in IoT and database design was crucial for our smart city project. He designed a scalable architecture that handles thousands of sensors efficiently. His problem-solving approach and communication skills are exceptional.",
    rating: 5,
    project: "Smart City Infrastructure",
    linkedinUrl: "https://linkedin.com/in/david-kumar",
    companyUrl: "https://smartcity.solutions",
    date: "2023-10-05"
  },
  {
    id: "5",
    name: "Lisa Thompson",
    role: "Founder",
    company: "HealthTech Innovations",
    avatar: "/testimonials/lisa.jpg",
    content: "Ahmed developed a sophisticated mobile app for our healthcare platform. His attention to user experience and security requirements was impressive. The app has received excellent feedback from our users and medical professionals.",
    rating: 5,
    project: "Healthcare Mobile App",
    linkedinUrl: "https://linkedin.com/in/lisa-thompson",
    companyUrl: "https://healthtech.innovations",
    date: "2023-09-15"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-blue-50/50 to-purple-50/50 dark:from-green-900/20 dark:via-blue-900/20 dark:to-purple-900/20" />
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-green-100/50 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
              <Users className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700 dark:text-green-300">Client Testimonials</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                What Clients
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent"
              >
                Are Saying
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Don&apos;t just take my word for it. Here&apos;s what industry leaders and satisfied clients 
              have to say about working with me on their projects.
            </motion.p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {[
              { icon: Users, label: "Happy Clients", value: "50+" },
              { icon: Award, label: "Projects Completed", value: "75+" },
              { icon: Star, label: "Average Rating", value: "4.9/5" },
              { icon: Quote, label: "Success Rate", value: "98%" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Card className="relative overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-green-200/50 dark:border-green-800/50">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Client Info */}
                  <div className="text-center md:text-left">
                    <motion.div
                      key={currentTestimonial.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="mb-6"
                    >
                      <div className="w-24 h-24 mx-auto md:mx-0 mb-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                        <Users className="w-12 h-12 text-green-600" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{currentTestimonial.name}</h3>
                      <p className="text-muted-foreground mb-1">{currentTestimonial.role}</p>
                      <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                        <span className="text-sm font-medium text-blue-600">{currentTestimonial.company}</span>
                        {currentTestimonial.companyUrl && (
                          <ExternalLink className="w-3 h-3 text-muted-foreground" />
                        )}
                      </div>
                      
                      {/* Rating */}
                      <div className="flex justify-center md:justify-start gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < currentTestimonial.rating 
                                ? "fill-yellow-400 text-yellow-400" 
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <div className="text-xs text-muted-foreground">
                        Project: {currentTestimonial.project}
                      </div>
                    </motion.div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="md:col-span-2">
                    <motion.div
                      key={currentTestimonial.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Quote className="w-12 h-12 text-green-500/30 mb-4" />
                      
                      <blockquote className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                        &ldquo;{currentTestimonial.content}&rdquo;
                      </blockquote>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          {new Date(currentTestimonial.date).toLocaleDateString('en-US', {
                            month: 'long',
                            year: 'numeric'
                          })}
                        </div>
                        
                        {currentTestimonial.linkedinUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-blue-600 border-blue-200 hover:bg-blue-50"
                            asChild
                          >
                            <a href={currentTestimonial.linkedinUrl} target="_blank" rel="noopener noreferrer">
                              <Linkedin className="w-4 h-4 mr-2" />
                              Connect
                            </a>
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>

              {/* Navigation Buttons */}
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-green-200/50 dark:border-green-800/50 transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-60'
                }`}
              >
                <ChevronLeft className="w-5 h-5 text-green-600" />
              </motion.button>

              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-green-200/50 dark:border-green-800/50 transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-60'
                }`}
              >
                <ChevronRight className="w-5 h-5 text-green-600" />
              </motion.button>
            </Card>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-green-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Card className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-300/30 dark:border-green-700/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Ready to join these satisfied clients?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Let&apos;s discuss your project and see how I can help you achieve your goals. 
                  I&apos;m committed to delivering exceptional results that exceed expectations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white">
                    Start Your Project
                  </Button>
                  <Button variant="outline" className="border-green-200 dark:border-green-800">
                    View More Reviews
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
