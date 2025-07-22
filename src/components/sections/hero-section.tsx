'use client'

import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Button } from '@/components/ui/button'
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import Typewriter from 'typewriter-effect'

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadCV = () => {
    // Create a link to download CV
    const link = document.createElement('a')
    link.href = '/ahmed-attafi-cv.pdf' // You'll need to add this file to public folder
    link.download = 'Ahmed_Attafi_CV.pdf'
    link.click()
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />
      
      {/* 3D Background Placeholder */}
      <div className="absolute inset-0 opacity-30">
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900" />}>
          {/* Replace this URL with your own Spline scene */}
          <div className="w-full h-full bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
            <div className="text-6xl opacity-20">🚀</div>
          </div>
          {/* <Spline scene="https://prod.spline.design/your-scene-url/scene.splinecode" /> */}
        </Suspense>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Hi, I'm Ahmed Attafi
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground h-16"
            >
              <Typewriter
                options={{
                  strings: [
                    'Software Developer',
                    'IoT Specialist', 
                    'Cloud Enthusiast',
                    'QA Engineer @ Capgemini',
                    'Full-Stack Developer',
                    'Arduino Expert'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-lg"
            >
              Passionate about building innovative solutions with cutting-edge technology. 
              From IoT systems to automotive software, I transform ideas into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={scrollToAbout}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                Explore My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <Button
                onClick={downloadCV}
                variant="outline"
                size="lg"
              >
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex space-x-4"
            >
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/Attafii" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/ahmed-attafi/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:ahmed.attafi@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border">
              <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">420+</div>
                  <div className="text-sm text-muted-foreground">Commits This Year</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">89</div>
                  <div className="text-sm text-muted-foreground">Stars Earned</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">156</div>
                  <div className="text-sm text-muted-foreground">Pull Requests</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">∞</div>
                  <div className="text-sm text-muted-foreground">Coffee Consumed</div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border">
              <h3 className="text-lg font-semibold mb-4">Current Focus</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Advanced IoT Security Framework
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Kubernetes & DevOps automation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Automotive Testing Suite
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={scrollToAbout}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
