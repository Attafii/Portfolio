"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle } from "lucide-react";

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(event.clientX - rect.left);
      mouseY.set(event.clientY - rect.top);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "attafiahmed.dev@gmail.com",
      href: "mailto:attafiahmed.dev@gmail.com",
      color: "from-blue-500 to-teal-500"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+216 96 576 301",
      href: "tel:+21696576301",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+216 95 448 612",
      href: "https://wa.me/21695448612",
      color: "from-green-400 to-green-600"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Tunisia 🇹🇳",
      href: "#",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Attafii", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ahmed-attafi/", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Twitter, href: "https://x.com/ahmedattafi_", label: "Twitter", color: "hover:text-blue-400" },
  ];

  return (
    <section 
      ref={containerRef}
      className="py-32 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      id="contact"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-teal-50/50 to-cyan-50/50 dark:from-blue-900/20 dark:via-teal-900/20 dark:to-cyan-900/20" />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/20 to-teal-400/20 blur-3xl"
          style={{ x, y }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 blur-2xl"
          style={{ 
            x: useSpring(mouseX, { stiffness: 50, damping: 20 }), 
            y: useSpring(mouseY, { stiffness: 50, damping: 20 }) 
          }}
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
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Get In Touch</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent"
              >
                Let&apos;s Create
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-block bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent"
              >
                Something Amazing
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Ready to bring your ideas to life? I am always excited to work on innovative projects 
              and help turn your vision into reality. Let us start a conversation!
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Information Grid */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent text-center mb-12">
                  Contact Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex items-center gap-4 p-6 rounded-xl bg-white/70 dark:bg-gray-800/70 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm group cursor-pointer"
                    >
                      <div className={`p-4 rounded-lg bg-gradient-to-br ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                        <p className="text-muted-foreground">{item.content}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Connect With Me
                </h3>
                
                <div className="flex justify-center gap-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: index * 0.1 
                      }}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        y: -5
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-5 rounded-xl bg-white/70 dark:bg-gray-800/70 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm ${social.color} transition-colors duration-300`}
                      title={social.label}
                    >
                      <social.icon className="w-7 h-7" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-12"
              >
                <Card className="relative bg-gradient-to-br from-blue-500/10 to-teal-500/10 border-blue-300/30 dark:border-blue-700/30 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      Ready to start your project?
                    </h4>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
                      I am here to help you turn your ideas into reality. Whether you need a website, 
                      mobile app, IoT solution, or just want to chat about technology - let us connect!
                    </p>
                    <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="font-medium">Available for new projects</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
