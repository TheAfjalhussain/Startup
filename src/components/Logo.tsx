import { Link } from "react-router-dom";
import horizontal from "@/assets/growthix-horizontal.png";
import vertical from "@/assets/growthix-vertical.png";

interface LogoProps {
  className?: string;
  variant?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ className = "", variant = "horizontal", size = "md" }: LogoProps) => {
  const src = variant === "vertical" ? vertical : horizontal;
  const heights = {
    sm: variant === "vertical" ? "h-20" : "h-10",
    md: variant === "vertical" ? "h-24" : "h-14 md:h-20",
    lg: variant === "vertical" ? "h-36" : "h-16",
  } as const;

  return (
    <Link to="/" aria-label="Growthix home" className={`inline-flex items-center ${className}`}>
      <img
        src={src}
        alt="Growthix — Your Digital Growth Partner"
        className={`${heights[size]} w-auto select-none`}
        draggable={false}
      />
    </Link>
  );
};
