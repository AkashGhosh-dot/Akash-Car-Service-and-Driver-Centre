import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export function Badge({ children, className, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-medium font-body uppercase tracking-wider text-brand-red",
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
