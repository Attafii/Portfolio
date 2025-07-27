"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown,
  ChevronUp,
  HelpCircle,
  MessageCircle,
  Clock,
  DollarSign,
  Code,
  Smartphone,
  Shield,
  Zap,
  Users,
  CheckCircle
} from "lucide-react";

import React from "react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'technical' | 'timeline' | 'support';
  icon: React.ComponentType<{ className?: string }>;
}

const faqs: FAQ[] = [
  {
    id: "what-services",
    question: "What services do you offer?",
    answer: "I specialize in full-stack web development, mobile app development, IoT solutions, API development, database design, UI/UX design, and technical consulting. I work with modern technologies like React, Next.js, Node.js, Python, and various cloud platforms to deliver comprehensive digital solutions.",
    category: "general",
    icon: Code
  },
  {
    id: "project-timeline",
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. A simple website typically takes 2-3 weeks, while a full-stack web application can take 4-8 weeks. IoT solutions and enterprise applications may require 8-12 weeks. I provide detailed timelines during the initial consultation and keep you updated throughout the development process.",
    category: "timeline",
    icon: Clock
  },
  {
    id: "pricing-structure",
    question: "How do you price your projects?",
    answer: "I offer transparent, project-based pricing with no hidden fees. Pricing depends on project complexity, features required, and timeline. I provide three main packages: Starter ($1,500+), Professional ($3,500+), and Enterprise ($6,500+). All quotes include detailed breakdowns, and I offer custom pricing for unique requirements.",
    category: "pricing",
    icon: DollarSign
  },
  {
    id: "technologies-used",
    question: "What technologies do you work with?",
    answer: "I work with a comprehensive tech stack including React, Next.js, Node.js, TypeScript, Python, PostgreSQL, MongoDB, Firebase, AWS, Docker, and many more. For mobile development, I use React Native and Flutter. For IoT projects, I work with Arduino, Raspberry Pi, and various sensors and communication protocols.",
    category: "technical",
    icon: Zap
  },
  {
    id: "mobile-development",
    question: "Do you develop mobile apps?",
    answer: "Yes! I develop both native and cross-platform mobile applications for iOS and Android. I primarily use React Native and Flutter for cross-platform development, which allows for faster development and easier maintenance while still providing native performance and user experience.",
    category: "technical",
    icon: Smartphone
  },
  {
    id: "project-ownership",
    question: "Will I own the source code?",
    answer: "Absolutely! You will receive complete ownership of all source code, designs, and documentation upon project completion and final payment. I provide well-documented, clean code with deployment instructions and offer training sessions to help your team understand the codebase.",
    category: "general",
    icon: Shield
  },
  {
    id: "support-maintenance",
    question: "Do you provide ongoing support?",
    answer: "Yes, I offer various support and maintenance packages. All projects include basic support for 1-6 months depending on the package. I also offer ongoing maintenance contracts that include bug fixes, security updates, performance monitoring, and feature enhancements starting from $500/month.",
    category: "support",
    icon: Users
  },
  {
    id: "payment-terms",
    question: "What are your payment terms?",
    answer: "I typically require 50% upfront to begin the project and 50% upon completion. For larger projects, I can arrange milestone-based payments. I accept bank transfers, PayPal, and major credit cards. All payments are secured and I provide detailed invoices with project breakdowns.",
    category: "pricing",
    icon: CheckCircle
  },
  {
    id: "revision-process",
    question: "How many revisions are included?",
    answer: "The number of revisions depends on your package: Starter includes 1 round, Professional includes 3 rounds, and Enterprise includes unlimited revisions. I encourage feedback throughout the development process to ensure we're aligned on the vision and minimize the need for major revisions at the end.",
    category: "general",
    icon: MessageCircle
  },
  {
    id: "project-communication",
    question: "How do you communicate during projects?",
    answer: "I maintain regular communication through your preferred channels (email, Slack, Teams, etc.). I provide weekly progress updates, schedule milestone reviews, and am available for quick questions during business hours. For Enterprise clients, I offer dedicated communication channels and priority response times.",
    category: "support",
    icon: MessageCircle
  },
  {
    id: "design-services",
    question: "Do you provide design services?",
    answer: "Yes, I offer comprehensive UI/UX design services including user research, wireframing, prototyping, and visual design. I can work with your existing designs or create new ones from scratch. I use modern design tools like Figma and follow current design principles to ensure great user experiences.",
    category: "technical",
    icon: Code
  },
  {
    id: "hosting-deployment",
    question: "Do you handle hosting and deployment?",
    answer: "Yes, I can handle the complete deployment process including domain setup, hosting configuration, SSL certificates, and CI/CD pipeline setup. I work with various platforms like Vercel, AWS, DigitalOcean, and others. I also provide documentation so you can manage deployments independently if preferred.",
    category: "technical",
    icon: Zap
  }
];

const categories = [
  { id: 'all', label: 'All Questions', icon: HelpCircle },
  { id: 'general', label: 'General', icon: MessageCircle },
  { id: 'pricing', label: 'Pricing', icon: DollarSign },
  { id: 'technical', label: 'Technical', icon: Code },
  { id: 'timeline', label: 'Timeline', icon: Clock },
  { id: 'support', label: 'Support', icon: Users }
];

export function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-teal-50/50 to-cyan-50/50 dark:from-blue-900/20 dark:via-teal-900/20 dark:to-cyan-900/20" />
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-teal-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">FAQ</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent"
              >
                Frequently
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-block bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent"
              >
                Asked Questions
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Find answers to common questions about my services, process, pricing, and more. 
              Can&apos;t find what you&apos;re looking for? Feel free to reach out directly.
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                    : 'bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* FAQ List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="overflow-hidden border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
                  <motion.button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left"
                    whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <faq.icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {faq.question}
                          </h3>
                        </div>
                        <motion.div
                          animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0 ml-4"
                        >
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        </motion.div>
                      </div>
                    </CardContent>
                  </motion.button>

                  <AnimatePresence>
                    {openFAQ === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="pl-14">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Still Have Questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Card className="bg-gradient-to-br from-blue-500/10 to-teal-500/10 border-blue-300/30 dark:border-blue-700/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="max-w-2xl mx-auto">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8 text-blue-600" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    Still have questions?
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Can&apos;t find the answer you&apos;re looking for? I&apos;m here to help! 
                    Send me a message and I&apos;ll get back to you within 24 hours.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Ask a Question
                    </Button>
                    <Button variant="outline" className="border-blue-200 dark:border-blue-800">
                      Schedule a Call
                    </Button>
                  </div>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>24h response time</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <MessageCircle className="w-4 h-4" />
                      <span>Free consultation</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4" />
                      <span>No obligation</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
