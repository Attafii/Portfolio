'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Heart,
  ArrowUp,
  Coffee,
  MapPin,
  ExternalLink
} from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/Attafii',
    description: 'Check out my code'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/ahmed-attafi/',
    description: 'Professional network'
  },
  {
    name: 'Medium',
    icon: ExternalLink,
    url: 'https://medium.com/@attafii',
    description: 'Read my articles'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:attafiahmed.dev@gmail.com',
    description: 'Get in touch'
  }
]

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' }
]

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Arduino', 'IoT', 'Python', 'C#', 'Azure', 'Firebase'
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="py-16"
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* About Column */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Ahmed Attafi
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Full Stack Developer & Software Tester passionate about building innovative solutions 
                  that bridge the physical and digital worlds.
                </p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Tunisia 🇹🇳</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Coffee className="w-4 h-4" />
                  <span>Fueled by coffee and curiosity</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeInUp}>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div variants={fadeInUp}>
              <h4 className="font-semibold mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp}>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <Icon className="w-4 h-4" />
                      <div>
                        <div className="text-sm font-medium group-hover:text-primary transition-colors">
                          {social.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {social.description}
                        </div>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div variants={fadeInUp} className="mt-12">
            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Get notified about new projects, blog posts, and opportunities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="flex-1 px-3 py-2 text-sm border rounded-md bg-background"
                />
                <Button size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <Separator />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© 2025 Ahmed Attafi</span>
            <span>•</span>
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of</span>
            <Coffee className="w-4 h-4 text-brown-500" />
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-xs text-muted-foreground">
              Built with Next.js, Shadcn UI, Framer Motion & Spline
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="h-8 w-8"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
      </div>
    </footer>
  )
}
