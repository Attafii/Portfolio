import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmed Attafi - About | Full Stack Developer from Tunisia",
  description: "Learn more about Ahmed Attafi (Attafii), a passionate Full Stack Developer from Tunisia specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: "Ahmed Attafi, Attafii, About, Full Stack Developer, Tunisia, React, Next.js, Biography, Software Engineer",
  openGraph: {
    title: "About Ahmed Attafi - Full Stack Developer",
    description: "Ahmed Attafi (Attafii) - Professional Full Stack Developer from Tunisia",
    url: "/about",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Ahmed Attafi</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Also known as <strong>Attafii</strong> - Full Stack Developer from Tunisia
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert mx-auto">
          <h2>About Ahmed Attafi (Attafii)</h2>
          <p>
            <strong>Ahmed Attafi</strong>, professionally known as <strong>Attafii</strong>, is a passionate and versatile 
            Full Stack Developer from Tunisia. Ahmed specializes in modern web technologies including React, Next.js, 
            Node.js, and TypeScript.
          </p>

          <h3>Professional Background</h3>
          <p>
            Ahmed Attafi currently works as an Automotive Software Tester at Capgemini Engineering, where he develops 
            and executes comprehensive test plans for automotive software systems. Ahmed's expertise spans across 
            automotive software testing, IoT system architecture, and investment platform development.
          </p>

          <h3>Education</h3>
          <p>
            Ahmed Attafi is pursuing his Engineering Degree in Embedded Ambient and Mobile Systems at ESPRIT (2023-2027), 
            building upon his Bachelor's in Computer Engineering from ISTIC.
          </p>

          <h3>Technical Expertise</h3>
          <ul>
            <li>Frontend: React, Next.js, TypeScript, JavaScript</li>
            <li>Backend: Node.js, Express, Python</li>
            <li>Databases: PostgreSQL, MongoDB</li>
            <li>Cloud: Azure, AWS</li>
            <li>Mobile: Flutter, React Native</li>
            <li>IoT: Arduino, Raspberry Pi</li>
          </ul>

          <h3>Contact Ahmed Attafi</h3>
          <p>
            You can reach Ahmed Attafi (Attafii) through:
          </p>
          <ul>
            <li>Email: attafiahmed.dev@gmail.com</li>
            <li>LinkedIn: Ahmed Attafi</li>
            <li>GitHub: Attafii</li>
            <li>Portfolio: attafii.dev</li>
          </ul>

          <h3>Ahmed Attafi's Mission</h3>
          <p>
            Ahmed Attafi is dedicated to creating innovative digital solutions that bridge the gap between 
            complex technology and user-friendly experiences. As Attafii, Ahmed continues to push the boundaries 
            of what's possible in web development and IoT systems.
          </p>
        </div>
      </div>
    </div>
  );
}
