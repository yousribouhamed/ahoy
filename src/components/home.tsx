"use client";

import { Spotlight } from "@/components/ui/spotlight";
import ShinyText from "@/components/ui/shiny-text";
import SplitText from "@/components/ui/splittext";
import SplitTextGSAP from "@/components/ui/split-text-gsap";
import GradientButton from "@/components/ui/gradient-button";
import AnimatedLogoCloud from "@/components/ui/animated-logo-cloud";
import Footer from "@/components/ui/footer";
import GoogleGeminiEffectDemo from "@/components/google-gemini-effect-demo";
import GridBackgroundDemo from "@/components/ui/grid-background-demo";
import GridBackground from "@/components/ui/grid-background";
import EnhancedNavbar from "@/components/ui/enhanced-navbar";
import AnimatedContent from "@/components/ui/animated-content";
import ScrollFloat from "@/components/ui/scroll-float";
import { useEffect, useState } from "react";

export default function Home() {
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
      {/* Enhanced Navbar with Popover */}
      <div className="relative z-50">
        <EnhancedNavbar />
      </div>
      
      {/* Grid Background */}
      <GridBackground />
      <div className="flex flex-1 md:items-center md:justify-center">
  
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
         
          
          <div className="mx-auto mt-6 max-w-4xl text-center">
            <SplitTextGSAP 
              text="Charting the Course for the Future of Movement"
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-200"
              delay={10}
              duration={0.5}
            />
          </div>
          
          <div className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
                  <AnimatedContent 
  direction="vertical" 
  distance={100} 
  ease="ease.(1, 0.3)"
  duration={0.5}
>
  <ShinyText 
              text="Arisen from our startup roots, Ahoy stands as a beacon of innovation in a new-age landscape, breaking boundaries and setting new benchmarks. "
              className=" font-medium text-xl text-center"
              speed={4}
            />
</AnimatedContent>
            
          </div>
          
          {/* Gradient Button */}
          <div className="flex justify-center mt-8">
            <button className="font-semibold px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
              Get Started
            </button>
          </div>
          
    
          {/* Animated Logo Cloud */}
          <div className="mt-16">
                <h1 className="text-white items-center text-center font-semibold text-xl">WORKED WITH</h1>
            <AnimatedLogoCloud />
          </div>
        </div>
      </div>
      
      <ScrollFloat 
  containerClassName="mx-auto mt-6 max-w-4xl text-center"
  textClassName="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-200"
>
  What's AHOY?
</ScrollFloat>
      
      {/* Footer */}
     <Footer />
    </div>
  );
}
