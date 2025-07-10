"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface FloatingNavProps {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}

export function FloatingNav({ navItems, className }: FloatingNavProps) {
  return (
    <div className={cn(
      "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
      className
    )}>
      <div className="relative rounded-full border border-transparent bg-white/20 backdrop-blur-lg px-4 py-2">
        <div className="flex items-center space-x-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 transition-colors"
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
