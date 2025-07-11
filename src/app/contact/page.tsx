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
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    // Prevent flash by ensuring components are mounted
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/myzjrekj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        // Auto-hide success message after 5 seconds
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        // Auto-hide error message after 5 seconds
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      // Auto-hide error message after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

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
              
              {/* Status Messages */}
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-green-300 font-medium">Thank you! Your message has been sent successfully.</p>
                  </div>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-red-300 font-medium">Sorry, there was an error sending your message. Please try again.</p>
                  </div>
                </div>
              )}

              {/* Custom Form with JavaScript Handling */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <BlurReveal delay={0.6}>
                    <div className="space-y-4">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                        First Name
                      </label>
                      <Input 
                        id="firstName"
                        name="firstName" 
                        type="text" 
                        placeholder="Your first name" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </BlurReveal>
                  
                  <BlurReveal delay={0.7}>
                    <div className="space-y-4">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                        Last Name
                      </label>
                      <Input 
                        id="lastName"
                        name="lastName" 
                        type="text" 
                        placeholder="Your last name" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </BlurReveal>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <BlurReveal delay={0.8}>
                    <div className="space-y-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                        Email Address
                      </label>
                      <Input 
                        id="email"
                        name="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </BlurReveal>
                  
                  <BlurReveal delay={0.9}>
                    <div className="space-y-4">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                        Phone Number
                      </label>
                      <Input 
                        id="phone"
                        name="phone" 
                        type="tel" 
                        placeholder="+1 (555) 123-4567" 
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </BlurReveal>
                </div>
                
                <BlurReveal className="w-full" delay={1.0}>
                  <div className="space-y-4 w-full">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      className="min-h-[120px] text-white bg-neutral-950 border-neutral-700 w-full"
                      placeholder="Tell us about your project and how we can help..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="flex justify-center pt-2">
                      <button 
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="font-semibold font-ghapter px-8 py-3 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {formStatus === 'submitting' ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </div>
                  </div>
                </BlurReveal>
              </form>
              
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
            </div>
          </FadeContent>
          
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
