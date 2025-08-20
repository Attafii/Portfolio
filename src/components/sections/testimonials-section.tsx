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
  ExternalLink,
  UserCheck
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
    name: "Eya Khemiri",
    role: "Software Developer and Team Leader",
    company: "Capgemini Engineering",
    avatar: "/testimonials/eya.jpg",
    content: "Working with Ahmed has been an outstanding experience. He is highly determined and focused on finding effective solutions, consistently handling obstacles with efficiency and skill. Every project we’ve worked on together has been delivered quickly without compromising on quality, demonstrating remarkable attention to detail and a strong commitment to excellence. His professionalism and expertise make him an indispensable contributor to any future project",
    rating: 5,
    project: "IntelliConnect & Multiple Projects",
    linkedinUrl: "https://www.linkedin.com/in/eya-khemiri/",
    date: "2025-02-15"
  },
  {
    id: "2",
    name: "Mohamed Ashref BNA",
    role: "Solution Developer",
    company: "Helo Solutions",
    avatar: "/ashrefjpeg.jpeg",
    content: "Ahmed is an outstanding developer. We've worked on multiple projects together, and his dedication and technical skills never cease to amaze me. He has a unique ability to understand complex requirements and deliver elegant solutions. Always reliable and professional.",
    rating: 5,
    project: "Collaborative Development Projects",
    linkedinUrl: "https://www.linkedin.com/in/mohamedashrefbna/",
    date: "2025-05-20"
  },
  {
    id: "3",
    name: "Rayen Fassatoui",
    role: "Web Developer",
    company: "Aquil App",
    avatar: "/rayen.jpeg",
    content: "Ahmed is an exceptional developer and a great Coworker to work with. Our collaboration on various projects has been smooth and productive. His attention to detail, clean code practices, and innovative thinking make him a valuable team member. I highly recommend working with him.",
    rating: 5,
    project: "Software Development Projects",
    linkedinUrl: "https://www.linkedin.com/in/rayenfassatoui/",
    date: "2025-06-10"
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-blue-50/50 to-teal-50/50 dark:from-green-900/20 dark:via-blue-900/20 dark:to-teal-900/20" />
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
              <span className="text-sm font-medium text-green-700 dark:text-green-300">Colleague Testimonials</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 bg-clip-text text-transparent"
              >
                What Colleagues
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-block bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent"
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
              Don&apos;t just take my word for it. Here&apos;s what close colleagues and collaborators 
              have to say about working with me on various projects and initiatives.
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
              { icon: Users, label: "Close Colleagues", value: "3+" },
              { icon: Award, label: "Projects Completed", value: "15+" },
              { icon: Star, label: "Average Rating", value: "5.0/5" },
              { icon: Quote, label: "Collaboration Rate", value: "100%" }
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
                      <div className="w-24 h-24 mx-auto md:mx-0 mb-4 rounded-full overflow-hidden bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                        {currentTestimonial.id === "1" ? (
                          <UserCheck className="w-12 h-12 text-green-600" />
                        ) : (
                          <img 
                            src={currentTestimonial.avatar} 
                            alt={currentTestimonial.name}
                            className="w-full h-full object-cover"
                          />
                        )}
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
                  Ready to collaborate on your next project?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Let&apos;s discuss your project ideas and see how we can work together to bring them to life. 
                  I&apos;m committed to delivering high-quality results through effective collaboration.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                        // Pre-fill contact form with "Start Collaboration" specific template
                        setTimeout(() => {
                          const subjectField = document.querySelector('input[name="subject"]') as HTMLInputElement;
                          const messageField = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
                          if (subjectField) subjectField.value = "Collaboration Opportunity - Partnership Proposal";
                          if (messageField) messageField.value = "Hi Ahmed!\n\nAfter reading the testimonials and seeing your work, I'm interested in exploring a collaboration opportunity.\n\nCollaboration Details:\n- Type of collaboration: [Joint project, partnership, subcontracting, etc.]\n- My expertise/role: [What you bring to the table]\n- Project scope: [What we'd be working on together]\n- Timeline: [Proposed collaboration timeline]\n- Benefits: [How this collaboration would be mutually beneficial]\n\nI believe our combined skills could deliver exceptional results. Let's discuss how we can work together!\n\nLooking forward to your response,";
                          
                          // Trigger change events to update form state
                          const changeEvent = new Event('input', { bubbles: true });
                          if (subjectField) subjectField.dispatchEvent(changeEvent);
                          if (messageField) messageField.dispatchEvent(changeEvent);
                        }, 500);
                      }
                    }}
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
                  >
                    Start Collaboration
                  </Button>
                  <Button 
                    onClick={() => {
                      window.open('https://github.com/Attafii', '_blank');
                    }}
                    variant="outline" 
                    className="border-green-200 dark:border-green-800"
                  >
                    View Work Together
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
