'use client';

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, Phone, Calendar, ExternalLink, MessageSquare, Users } from "lucide-react";
import Link from "next/link";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  created_at: string;
}

export default function ContactsPage() {
  const { data: session, status } = useSession();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (status === 'unauthenticated') {
      redirect("/admin/login");
    }
    
    if (status === 'authenticated') {
      // In a real app, you'd fetch contacts from an API
      // For now, using placeholder data
      setTimeout(() => {
        setContacts([]);
        setLoading(false);
      }, 1000);
    }
  }, [status]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20" />
        <div className="animated-grid opacity-10" />
        <div className="floating-orb-1" />
        <div className="floating-orb-2" />
        <div className="floating-orb-3" />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-background/10 backdrop-blur-lg border-b border-purple-200/20 dark:border-purple-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/admin">
                <Button variant="outline" size="sm" className="mr-6 border-purple-200/50 hover:border-purple-400 hover:bg-purple-500/10 backdrop-blur-sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div className="flex items-center">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold gradient-text-purple-pink">
                    Contact Messages
                  </h1>
                  <p className="text-muted-foreground">
                    Manage contact form submissions
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-400/30">
                <Users className="w-3 h-3 mr-1" />
                {contacts.length} Message{contacts.length !== 1 ? 's' : ''}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {contacts.length === 0 ? (
            <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
              <CardContent className="flex flex-col items-center justify-center py-16 relative z-10">
                <div className="p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 mb-6">
                  <Mail className="w-16 h-16 text-purple-400 animate-pulse" />
                </div>
                <h3 className="text-2xl font-medium gradient-text-purple-pink mb-2">
                  No messages yet
                </h3>
                <p className="text-muted-foreground text-center max-w-md mb-6">
                  Contact form submissions will appear here. Make sure your contact form is working properly.
                </p>
                <Button variant="outline" className="border-purple-200/50 hover:border-purple-400 hover:bg-purple-500/10">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Check Contact Form
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {contacts.map((contact) => (
                <Card key={contact.id} className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 group hover:scale-[1.01] hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  <CardHeader className="relative z-10">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center text-xl group-hover:text-purple-600 transition-colors">
                          <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 mr-3">
                            <Mail className="w-5 h-5 text-purple-400" />
                          </div>
                          {contact.name}
                        </CardTitle>
                        <CardDescription className="flex flex-wrap items-center mt-2 gap-4">
                          <span className="flex items-center">
                            <Mail className="w-4 h-4 mr-1 text-purple-400" />
                            {contact.email}
                          </span>
                          {contact.phone && (
                            <span className="flex items-center">
                              <Phone className="w-4 h-4 mr-1 text-pink-400" />
                              {contact.phone}
                            </span>
                          )}
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-400/30 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(contact.created_at).toLocaleDateString()}
                        </Badge>
                        <a
                          href={`mailto:${contact.email}?subject=Re: ${contact.subject || 'Your message'}`}
                          className="inline-flex"
                        >
                          <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Reply
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    {contact.subject && (
                      <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-200/20 dark:border-purple-800/20">
                        <h4 className="font-medium gradient-text-purple-pink mb-1 text-sm uppercase tracking-wide">
                          Subject:
                        </h4>
                        <p className="text-foreground font-medium">
                          {contact.subject}
                        </p>
                      </div>
                    )}
                    
                    <div className="mb-4">
                      <h4 className="font-medium gradient-text-purple-pink mb-2 text-sm uppercase tracking-wide">
                        Message:
                      </h4>
                      <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-200/20 dark:border-purple-800/20">
                        <p className="text-foreground whitespace-pre-wrap leading-relaxed">
                          {contact.message}
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-purple-200/20 dark:border-purple-800/20">
                      <p className="text-xs text-muted-foreground flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        Received on {new Date(contact.created_at).toLocaleString()}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
