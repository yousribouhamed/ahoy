"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface Avatar {
  alt: string;
  src: string;
}

interface SocialProofAvatarsProps {
  avatars: Avatar[];
  extraCount?: number;
  children?: React.ReactNode;
  className?: string;
  avatarClassName?: string;
  size?: "sm" | "md" | "lg";
}

export const SocialProofAvatars: React.FC<SocialProofAvatarsProps> = ({
  avatars,
  extraCount = 0,
  children,
  className,
  avatarClassName,
  size = "md",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const avatarSize = sizeClasses[size];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Avatars Container */}
      <div className="flex -space-x-2">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className={cn(
              "relative rounded-full border-2 border-white dark:border-gray-800 overflow-hidden bg-gray-100 dark:bg-gray-700",
              avatarSize,
              avatarClassName
            )}
            style={{ zIndex: avatars.length - index }}
          >
            <img
              src={avatar.src}
              alt={avatar.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
        
        {/* Extra Count Avatar */}
        {extraCount > 0 && (
          <div
            className={cn(
              "relative rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-600 flex items-center justify-center",
              avatarSize,
              avatarClassName
            )}
            style={{ zIndex: 0 }}
          >
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
              +{extraCount}
            </span>
          </div>
        )}
      </div>

      {/* Children Content */}
      {children && (
        <div className="text-sm text-gray-600 dark:text-gray-300">
          {children}
        </div>
      )}
    </div>
  );
};
