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
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import HeroHighlightDemo from "@/components/hero-highlight-demo";
import { useEffect, useState, useRef } from "react";
import BlurRevealDemo from "@/components/blur-reveal-demo";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { BorderBeam } from "@/components/ui/border-beam";
import { SocialProofAvatars } from "@/components/ui/social-proof-avatars";
import SocialProofAvatarsDemo from "@/components/social-proof-avatars-demo";
import Avatar10 from "@/components/ui/avatar10";
import VariableProximity from "@/components/ui/variable-proximity";
import FadeContent from "@/components/ui/fade-content";
import { InputDemo } from "@/components/input-demo";


export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const variableProximityRef = useRef<HTMLDivElement>(null);

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
            <a href="/contact" className="font-semibold font-ghapter px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
              Get Started
            </a>
          </div>
          
    
          {/* Animated Logo Cloud */}
          <FadeContent blur={true} duration={1200} delay={300} className="mt-16">
                <h1 className="text-white  items-center text-center font-semibold text-xl">WORKED WITH</h1>
            <AnimatedLogoCloud />
          </FadeContent>
          
         
        </div>
      </div>
      
      

<FadeContent blur={false} duration={1500} delay={200} className="border-1 bg-gradient-to-l bg-neutral-800 to-neutral-900 mt-32 rounded-4xl py-8 px-8 mx-4 md:mx-auto max-w-7xl z-10 flex flex-col lg:flex-row items-center gap-8">
  
  <div className="h-full lg:w-2/3">
  <ScrollFloat 
    containerClassName="mx-auto max-w-4xl text-left"
    textClassName="text-5xl md:text-3xl lg:text-4xl font-bold text-gray-200 font-ghapter ">
    What's AHOY?
  </ScrollFloat>
    <BlurReveal delay={0.2} className="block mb-4">
      <h2 className="text-2xl text-white text-left font-light">
        Ahoy enables movement in its all-encompassing form in a technological landscape that consistently
        <Highlight className="text-black font-semibold dark:text-white px-2">
          pushes its boundaries.
        </Highlight>
      </h2>
    </BlurReveal>
    
    <BlurReveal delay={0.5} className="block">
      <p className="text-2xl text-white text-left font-light">
        We reshape motion dynamics by ideation, creating and establishing a unique tech infrastructure. Our ecosystem is built on the foundation of innovation above all else, from purposeful automation to strategy, planning, and execution to harvesting the power of networking.
      </p>
    </BlurReveal>
     {/* Client Avatars Section */}
          <div>
            <BlurReveal delay={0.7}>
              <Avatar10 />
            </BlurReveal>
          </div>
  </div>

  <BlurReveal delay={0.8} className="lg:w-1/3">
    <img src="/WIAHOY.png" alt="What is AHOY" className="rounded-4xl h-[400px] w-full object-cover" />
  </BlurReveal>
  
</FadeContent>
      
<div ref={variableProximityRef}>
<FadeContent blur={true} duration={1800} delay={400} className="mx-auto mt-32 flex-row lg:flex md:flex gap-16 z-10 max-w-7xl px-8">
  <h2 className="text-white text-8xl lg:text-8xl text-right font-ghapter"> 
    What we do?
  </h2>
  <div>
<h2 className="text-white text-xl w-2/2" >AHOY is at the forefront of technological innovation, revolutionizing the future with our cutting-edge deep-tech infrastructure.</h2>
    <h2 className="text-white mt-8 text-xl w-2/2">
  We are developing a powerful reality large action model designed to empower AI to take decisive actions in real-time, seamlessly transitioning from words to impactful outcomes without the need for human intervention.

As the first company to implement decentralized AI on-edge, AHOY is leading the way in creating smarter, more efficient systems that adapt dynamically to evolving environments.

Our proven expertise spans a cross a range of sectors, including logistics, aviation, traffic and road planning, and transportation, where we deliver transformative solutions that drive meaningful change.
</h2>
  </div>
     

</FadeContent>
</div>


      {/* Footer */}
     <Footer />
    </div>
  );
}
