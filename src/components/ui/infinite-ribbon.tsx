"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface InfiniteRibbonProps {
  children: React.ReactNode;
  rotation?: number;
  reverse?: boolean;
  className?: string;
  speed?: number;
}

export function InfiniteRibbon({
  children,
  rotation = 0,
  reverse = false,
  className,
  speed = 20
}: InfiniteRibbonProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-full overflow-hidden",
        className
      )}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div
        className={cn(
          "flex whitespace-nowrap",
          reverse ? "animate-scroll-reverse" : "animate-scroll"
        )}
        style={{
          animationDuration: `${speed}s`,
          width: "200%"
        }}
      >
        {/* First set of text */}
        <div className="flex items-center space-x-8 px-4 min-w-full">
          <span className="text-lg font-medium text-white/80 tracking-wide">
            {children}
          </span>
          <span className="text-white/40">•</span>
          <span className="text-lg font-medium text-white/80 tracking-wide">
            {children}
          </span>
          <span className="text-white/40">•</span>
          <span className="text-lg font-medium text-white/80 tracking-wide">
            {children}
          </span>
          <span className="text-white/40">•</span>
          <span className="text-lg font-medium text-white/80 tracking-wide">
            {children}
          </span>
          <span className="text-white/40">•</span>
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center space-x-8 px-4 min-w-full">
          <span className="text-lg font-medium text-white/80 tracking-wide">
            {children}
          </span>
          <span className="text-white/40">•</span>
          <span className="text-lg font-medium text-white/80 tracking-wide">
            {children}
          </span>
          <span className="text-white/40">•</span>
          <span className="text-lg font-medium text-white/80 tracking-wide">
            {children}
          </span>
          <span className="text-white/40">•</span>
          <span className="text-lg font-medium text-white/80 tracking-wide">
            {children}
          </span>
          <span className="text-white/40">•</span>
        </div>
      </div>
    </div>
  );
}
