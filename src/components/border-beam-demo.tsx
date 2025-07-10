"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
 
export default function BorderBeamDemo() {
  const { theme } = useTheme();
  const [lightColor, setLightColor] = useState("#FAFAFA");
 
  useEffect(() => {
    setLightColor(theme === "dark" ? "#FAFAFA" : "#FF2056");
  }, [theme]);
 
  return (
    <div className="relative rounded-lg shadow-sm border border-gray-700/50 bg-black/50 backdrop-blur-sm">
      <BorderBeam lightColor={lightColor} lightWidth={350} duration={8} />
      <div className="h-full w-full py-4 px-6 max-w-72 space-y-2">
        <h3 className="font-semibold text-2xl text-white">Border Beam</h3>
        <p className="text-sm text-gray-300">
          This card showcases a dynamic border beam effect, adding a subtle,
          animated glow around the edges.
        </p>
      </div>
    </div>
  );
}
