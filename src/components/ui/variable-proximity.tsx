"use client";

import React, { useEffect, useRef, RefObject } from "react";

interface VariableProximityProps {
  label: string;
  fromFontVariationSettings?: string;
  toFontVariationSettings?: string;
  containerRef?: RefObject<HTMLElement | null>;
  radius?: number;
  falloff?: "linear" | "exponential";
  className?: string;
}

const VariableProximity: React.FC<VariableProximityProps> = ({
  label,
  fromFontVariationSettings = "'wght' 400, 'wdth' 100",
  toFontVariationSettings = "'wght' 700, 'wdth' 125",
  containerRef,
  radius = 100,
  falloff = "linear",
  className = "",
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    const container = containerRef?.current || document.body;

    if (!textElement) return;

    const handleMouseMove = (e: MouseEvent) => {
      const textRect = textElement.getBoundingClientRect();
      const textCenterX = textRect.left + textRect.width / 2;
      const textCenterY = textRect.top + textRect.height / 2;

      const distance = Math.sqrt(
        Math.pow(e.clientX - textCenterX, 2) + Math.pow(e.clientY - textCenterY, 2)
      );

      let factor = 0;
      if (distance <= radius) {
        if (falloff === "exponential") {
          factor = 1 - Math.pow(distance / radius, 2);
        } else {
          factor = 1 - distance / radius;
        }
      }

      // Parse font variation settings
      const fromSettings = parseFontVariationSettings(fromFontVariationSettings);
      const toSettings = parseFontVariationSettings(toFontVariationSettings);

      // Interpolate between from and to settings
      const interpolatedSettings = Object.keys(fromSettings).map((key) => {
        const fromValue = fromSettings[key];
        const toValue = toSettings[key] || fromValue;
        const interpolatedValue = fromValue + (toValue - fromValue) * factor;
        return `'${key}' ${interpolatedValue}`;
      }).join(", ");

      textElement.style.fontVariationSettings = interpolatedSettings;
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRef, radius, falloff, fromFontVariationSettings, toFontVariationSettings]);

  const parseFontVariationSettings = (settings: string): Record<string, number> => {
    const parsed: Record<string, number> = {};
    const matches = settings.match(/'([^']+)'\s+(\d+(?:\.\d+)?)/g);
    
    if (matches) {
      matches.forEach((match) => {
        const [, axis, value] = match.match(/'([^']+)'\s+(\d+(?:\.\d+)?)/) || [];
        if (axis && value) {
          parsed[axis] = parseFloat(value);
        }
      });
    }
    
    return parsed;
  };

  return (
    <div
      ref={textRef}
      className={className}
      style={{
        fontVariationSettings: fromFontVariationSettings,
      }}
    >
      {label}
    </div>
  );
};

export default VariableProximity;