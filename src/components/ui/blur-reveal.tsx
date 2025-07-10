"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { cn } from "@/lib/utils";

interface BlurRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  blur?: number;
  yOffset?: number;
}

export const BlurReveal: React.FC<BlurRevealProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  blur = 10,
  yOffset = 20,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "0px 0px -50px 0px",
    amount: 0.3
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      filter: `blur(${blur}px)`,
      y: yOffset,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.span>
  );
};
