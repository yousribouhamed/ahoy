"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words" | "lines";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [splitElements, setSplitElements] = useState<string[]>([]);

  useEffect(() => {
    if (!text) return;

    let elements: string[];
    switch (splitType) {
      case "words":
        elements = text.split(" ");
        break;
      case "lines":
        elements = text.split("\n");
        break;
      case "chars":
      default:
        elements = text.split("");
        break;
    }
    setSplitElements(elements);
  }, [text, splitType]);

  useEffect(() => {
    if (!ref.current || splitElements.length === 0) return;

    const elements = ref.current.querySelectorAll(".split-element");
    if (elements.length === 0) return;

    // Set initial state
    gsap.set(elements, from);

    // Create scroll trigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: `top ${90 - threshold * 100}%`,
        toggleActions: "play none none none",
        once: true,
      },
      onComplete: () => {
        onLetterAnimationComplete?.();
      },
    });

    tl.to(elements, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [splitElements, delay, duration, ease, from, to, threshold, onLetterAnimationComplete]);

  const renderSplitElements = () => {
    return splitElements.map((element, index) => {
      const isSpace = element === " ";
      const isNewline = element === "\n";
      
      if (isNewline) {
        return <br key={index} />;
      }
      
      return (
        <span
          key={index}
          className="split-element inline-block opacity-0"
          style={{
            whiteSpace: isSpace ? "pre" : "normal",
          }}
        >
          {isSpace ? "\u00A0" : element}
          {splitType === "words" && index < splitElements.length - 1 && !isNewline ? " " : ""}
        </span>
      );
    });
  };

  return (
    <div
      ref={ref}
      className={`split-parent overflow-hidden ${className}`}
      style={{
        textAlign,
        wordWrap: "break-word",
        opacity: splitElements.length === 0 ? 0 : 1,
      }}
    >
      {renderSplitElements()}
    </div>
  );
};

export default SplitText;
