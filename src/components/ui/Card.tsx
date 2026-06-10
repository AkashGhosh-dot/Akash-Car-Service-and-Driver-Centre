import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export function Card({ children, hover = false, className, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-gray-100 bg-white p-6 shadow-md",
        hover && "transition-all duration-200 hover:-translate-y-1 hover:shadow-xl",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
