"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
  lightColor?: string;
  lightWidth?: number;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  className,
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  anchor = 90,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
  lightColor = "#FAFAFA",
  lightWidth = 200,
}) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        "[border:calc(var(--border-width)*1px)_solid_transparent]",
        // Mask for the border effect
        "[mask-clip:padding-box,border-box]",
        "[mask-composite:intersect]",
        "[mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        // Background with conic gradient
        "[background:linear-gradient(transparent,transparent),conic-gradient(from_calc(var(--angle)*1deg),transparent_0%,var(--color-from)_calc(var(--anchor)*1%),var(--color-to)_calc(var(--anchor)*1%+5%),transparent_calc(var(--anchor)*1%+10%)_100%)]",
        className
      )}
      style={
        {
          "--border-width": borderWidth,
          "--anchor": anchor,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--angle": "0deg",
          animation: `borderBeam ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
        } as React.CSSProperties
      }
    />
  );
};
