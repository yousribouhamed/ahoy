"use client";

import { Spotlight } from "@/components/ui/spotlight";
import GridBackground from "@/components/ui/grid-background";
import EnhancedNavbar from "@/components/ui/enhanced-navbar";
import FadeContent from "@/components/ui/fade-content";
import { BlurReveal } from "@/components/ui/blur-reveal";
import Footer from "@/components/ui/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SplitTextGSAP from "@/components/ui/split-text-gsap";
import { useEffect, useState } from "react";

export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Prevent flash by ensuring components are mounted
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-black antialiased">
      
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-black antialiased">
      {/* Enhanced Navbar */}
      <div className="relative z-50">
        <EnhancedNavbar />
      </div>
      
      {/* Grid Background */}
      <GridBackground  />
      
      {/* Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      
      <div className="flex flex-1 md:items-center md:justify-center">
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          
          {/* Contact Header */}
          <div className="mx-auto mt-6 max-w-4xl text-center">
            <SplitTextGSAP 
              text="Get In Touch"
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-200 font-ghapter"
              delay={10}
              duration={0.5}
            />
          </div>
          
          <div className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
            <BlurReveal delay={0.3}>
              <p className="text-xl text-neutral-300">
                Ready to revolutionize your movement infrastructure? Let&apos;s discuss how AHOY can transform your business.
              </p>
            </BlurReveal>
          </div>
          
          {/* Contact Form Section */}
          <FadeContent blur={false} duration={1200} delay={400} className="mx-auto mt-16 max-w-4xl relative ">
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 space-y-6">
              
              <BlurReveal delay={0.5}>
                <h3 className="text-2xl font-semibold text-white text-center mb-8 font-ghapter">
                  Contact Information
                </h3>
              </BlurReveal>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <BlurReveal delay={0.6}>
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-300">
                      First Name
                    </label>
                    <Input type="text" placeholder="Your first name" />
                  </div>
                </BlurReveal>
                
                <BlurReveal delay={0.7}>
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-300">
                      Last Name
                    </label>
                    <Input type="text" placeholder="Your last name" />
                  </div>
                </BlurReveal>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <BlurReveal delay={0.8}>
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-300">
                      Email Address
                    </label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                </BlurReveal>
                
                <BlurReveal delay={0.9}>
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-300">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                </BlurReveal>
              </div>
              
              <BlurReveal className="w-full" delay={1.0}>
                <div className="space-y-4 w-full">
                  <label className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <Textarea
                    className="min-h-[120px] text-white bg-neutral-950 border-neutral-700 w-full"
                    placeholder="Tell us about your project and how we can help..."
                  />
                  <div className="flex justify-center pt-2">
                    <button className="font-semibold font-ghapter px-8 py-3 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 w-full md:w-auto">
                      Send Message
                    </button>
                  </div>
                </div>
              </BlurReveal>
              
            </div>
          </FadeContent>
          
          {/* Contact Information Cards */}
          <FadeContent blur={false} duration={1500} delay={600} className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <BlurReveal delay={1.2}>
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                  <p className="text-gray-400">ahoy@ahoy.ae</p>
                </div>
              </BlurReveal>
              
              <BlurReveal delay={1.3}>
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
                  <p className="text-gray-400">(+971) 4 876 9396</p>
                </div>
              </BlurReveal>
              
              <BlurReveal delay={1.4}>
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Social Media</h4>
                  <p className="text-gray-400">San Francisco, CA</p>
                </div>
              </BlurReveal>
              
            </div>
          </FadeContent>
          
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
