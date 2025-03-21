import React from "react";
import { cn } from "./utils"; // Import utility function

const Marquee = ({ className, reverse = false, pauseOnHover = false, children, repeat = 4 }) => {
  return (
    <div
      className={cn(
        "flex overflow-hidden whitespace-nowrap bg-blue-600 text-white py-2",
        className
      )}
    >
      {Array(repeat).fill(0).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 gap-4 animate-marquee",
            reverse && "animate-marquee-reverse",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
};

export default Marquee;