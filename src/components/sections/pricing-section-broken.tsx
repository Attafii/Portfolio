"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  X, 
  Star, 
  Zap,
  Crown,
  Rocket,
  MessageCircle,
  ArrowRight,
  Clock,
  Users,
  Shield,
  Headphones
} from "lucide-react";

import React from "react";

interface PricingTier {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  price: {
    amount: string;
    period: string;
    originalAmount?: string;
  };
  features: {
    name: string;
    included: boolean;
    description?: string;
  }[];
  popular?: boolean;
  badge?: string;
  buttonText: string;
  buttonVariant: "default" | "outline";
  deliverables: string[];
  timeline: string;
  support: string;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Package",
    description: "Perfect for small projects and startups looking to establish their digital presence.",
    icon: Rocket,
    price: {
      amount: "$1,500",
      period: "per project"
    },
    features: [
      { name: "Responsive Website", included: true, description: "Mobile-first design approach" },
      { name: "Up to 5 Pages", included: true, description: "Home, About, Services, Contact, Blog" },
      { name: "Contact Form", included: true, description: "Email integration included" },
      { name: "Basic SEO", included: true, description: "Meta tags and structure" },
      { name: "Mobile Optimization", included: true, description: "Optimized for all devices" },
      { name: "1 Month Support", included: true, description: "Bug fixes and minor updates" },
      { name: "CMS Integration", included: false },
      { name: "E-commerce Features", included: false },
      { name: "Advanced Analytics", included: false },
      { name: "Custom Animations", included: false },
      { name: "API Integration", included: false },
      { name: "Database Setup", included: false }
    ],
    deliverables: [
      "Fully responsive website",
      "Source code with documentation",
      "Basic hosting setup guidance",
      "1 round of revisions"
    ],
    timeline: "2-3 weeks",
    support: "1 month email support",
    buttonText: "Get Started",
    buttonVariant: "outline"
  },
  {
    id: "professional",
    name: "Professional Package",
    description: "Comprehensive solution for businesses ready to scale with advanced features.",
    icon: Crown,
    price: {
      amount: "$3,500",
      period: "per project",
      originalAmount: "$4,200"
    },
    features: [
      { name: "Responsive Website", included: true, description: "Mobile-first design approach" },
      { name: "Up to 10 Pages", included: true, description: "Complete website structure" },
      { name: "Contact Form", included: true, description: "Advanced form with validation" },
      { name: "Advanced SEO", included: true, description: "Complete SEO optimization" },
      { name: "Mobile Optimization", included: true, description: "Optimized for all devices" },
      { name: "3 Months Support", included: true, description: "Priority support included" },
      { name: "CMS Integration", included: true, description: "Easy content management" },
      { name: "Custom Animations", included: true, description: "Engaging user interactions" },
      { name: "API Integration", included: true, description: "Third-party service integration" },
      { name: "Database Setup", included: true, description: "Secure database configuration" },
      { name: "E-commerce Features", included: false },
      { name: "Advanced Analytics", included: false }
    ],
    deliverables: [
      "Professional website with CMS",
      "Database and API setup",
      "Custom animations and interactions",
      "SEO optimization",
      "3 rounds of revisions",
      "Deployment and hosting"
    ],
    timeline: "4-6 weeks",
    support: "3 months priority support",
    buttonText: "Choose Professional",
    buttonVariant: "default",
    popular: true,
    badge: "Most Popular"
  },
  {
    id: "enterprise",
    name: "Enterprise Package",
    description: "Complete digital solution with advanced features for large-scale applications.",
    icon: Zap,
    price: {
      amount: "$6,500",
      period: "per project",
      originalAmount: "$8,000"
    },
    features: [
      { name: "Responsive Website", included: true, description: "Mobile-first design approach" },
      { name: "Unlimited Pages", included: true, description: "No page limit" },
      { name: "Advanced Contact Forms", included: true, description: "Multiple forms with automation" },
      { name: "Complete SEO Suite", included: true, description: "Advanced SEO with analytics" },
      { name: "Mobile Optimization", included: true, description: "Optimized for all devices" },
      { name: "6 Months Support", included: true, description: "Dedicated support manager" },
      { name: "CMS Integration", included: true, description: "Advanced content management" },
      { name: "Custom Animations", included: true, description: "Professional animations" },
      { name: "API Integration", included: true, description: "Multiple API integrations" },
      { name: "Database Setup", included: true, description: "Scalable database design" },
      { name: "E-commerce Features", included: true, description: "Full online store capability" },
      { name: "Advanced Analytics", included: true, description: "Detailed performance tracking" }
    ],
    deliverables: [
      "Enterprise-grade application",
      "Complete e-commerce solution",
      "Advanced analytics dashboard",
      "Custom integrations",
      "Unlimited revisions",
      "Premium hosting setup",
      "Performance optimization",
      "Security audit"
    ],
    timeline: "8-12 weeks",
    support: "6 months dedicated support",
    buttonText: "Go Enterprise",
    buttonVariant: "default",
    badge: "Best Value"
  }
];

const addOns = [
  {
    name: "AI Chatbot Integration",
    description: "Intelligent customer support with AI-powered responses",
    price: "$800",
    icon: MessageCircle
  },
  {
    name: "Advanced Analytics",
    description: "Detailed user behavior tracking and reporting",
    price: "$500",
    icon: Users
  },
  {
    name: "Security Audit",
    description: "Comprehensive security assessment and hardening",
    price: "$600",
    icon: Shield
  },
  {
    name: "24/7 Monitoring",
    description: "Continuous uptime monitoring with alerts",
    price: "$200/month",
    icon: Clock
  }
];

export function PricingSection() {
  const [selectedTier, setSelectedTier] = useState("professional");
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/50 to-green-50/50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-green-900/20" />
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-purple-100/50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800">
              <Crown className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Transparent Pricing</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent"
              >
                Simple &
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-block bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent"
              >
                Fair Pricing
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Choose the perfect package for your project. No hidden fees, no surprises. 
              All packages include source code, documentation, and ongoing support.
            </motion.p>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid lg:grid-cols-3 gap-8 mb-20"
          >
            {/* Pricing cards will be added later */}
            <div className="text-center p-8 text-muted-foreground">
              Pricing plans coming soon
            </div>
          </motion.div>
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${tier.popular ? 'lg:scale-110' : ''}`}
              >
                <Card className={`h-full relative overflow-hidden transition-all duration-300 ${
                  tier.popular 
                    ? 'border-purple-500 shadow-2xl ring-2 ring-purple-500/20' 
                    : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-xl'
                } ${selectedTier === tier.id ? 'ring-2 ring-blue-500/20' : ''}`}>
                  
                  {tier.badge && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 shadow-lg">
                        {tier.badge}
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-8 pt-8">
                    <div className="flex justify-center mb-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br ${
                        tier.popular ? 'from-purple-500/20 to-blue-500/20' : 'from-gray-500/20 to-gray-600/20'
                      }`}>
                        <tier.icon className={`w-8 h-8 ${
                          tier.popular ? 'text-purple-600' : 'text-gray-600'
                        }`} />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>

                    <div className="mb-6">
                      {tier.price.originalAmount && (
                        <div className="text-lg text-muted-foreground line-through mb-1">
                          {tier.price.originalAmount}
                        </div>
                      )}
                      <div className="flex items-baseline justify-center gap-1">
                        <span className={`text-4xl font-bold ${
                          tier.popular 
                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent' 
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {tier.price.amount}
                        </span>
                        <span className="text-muted-foreground">/{tier.price.period}</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => setSelectedTier(tier.id)}
                      variant={tier.buttonVariant}
                      className={`w-full ${
                        tier.buttonVariant === 'default'
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                          : 'border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/30'
                      }`}
                    >
                      {tier.buttonText}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Project Info */}
                    <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium text-gray-600 dark:text-gray-300 mb-1">Timeline</div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-muted-foreground" />
                            <span>{tier.timeline}</span>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-600 dark:text-gray-300 mb-1">Support</div>
                          <div className="flex items-center gap-1">
                            <Headphones className="w-3 h-3 text-muted-foreground" />
                            <span>{tier.support}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            feature.included 
                              ? 'bg-green-100 dark:bg-green-900/30' 
                              : 'bg-gray-100 dark:bg-gray-800'
                          }`}>
                            {feature.included ? (
                              <Check className="w-3 h-3 text-green-600" />
                            ) : (
                              <X className="w-3 h-3 text-gray-400" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className={`text-sm font-medium ${
                              feature.included 
                                ? 'text-gray-900 dark:text-white' 
                                : 'text-gray-400 dark:text-gray-500'
                            }`}>
                              {feature.name}
                            </div>
                            {feature.description && (
                              <div className="text-xs text-muted-foreground mt-1">
                                {feature.description}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Add-ons Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Optional Add-ons
              </h3>
              <p className="text-muted-foreground">Enhance your project with these additional features</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                        <addon.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <h4 className="font-semibold mb-2">{addon.name}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{addon.description}</p>
                      <div className="text-lg font-bold text-purple-600">{addon.price}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-300/30 dark:border-purple-700/30 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Need a Custom Solution?
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                    Every project is unique. If none of these packages fit your needs perfectly, 
                    let&apos;s discuss a custom solution tailored specifically for your requirements.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">50% Upfront</div>
                        <div className="text-sm text-muted-foreground">Secure your project start</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">No Hidden Fees</div>
                        <div className="text-sm text-muted-foreground">What you see is what you pay</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Money-back Guarantee</div>
                        <div className="text-sm text-muted-foreground">100% satisfaction guaranteed</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Discuss Your Project
                    </Button>
                    <Button size="lg" variant="outline" className="border-purple-200 dark:border-purple-800">
                      Schedule a Call
                    </Button>
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
