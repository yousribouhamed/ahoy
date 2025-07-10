import React from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "blue" | "purple" | "green" | "red";
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  className,
  onClick,
  disabled = false,
  type = "button",
  variant = "blue",
}) => {
  const variantStyles = {
    blue: "bg-gradient-to-b from-blue-500 to-blue-600 focus:ring-blue-400",
    purple: "bg-gradient-to-b from-purple-500 to-purple-600 focus:ring-purple-400",
    green: "bg-gradient-to-b from-green-500 to-green-600 focus:ring-green-400",
    red: "bg-gradient-to-b from-red-500 to-red-600 focus:ring-red-400",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "px-8 py-2 rounded-full text-white focus:ring-2 hover:shadow-xl transition duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

export default GradientButton;
