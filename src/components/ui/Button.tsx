import Link from "next/link";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "whatsapp" | "ghost";
type Size = "sm" | "md" | "lg";

interface SharedProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium font-body transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand-red text-white hover:bg-brand-red-hover active:scale-95",
  secondary:
    "border-2 border-white/60 text-white hover:bg-white/10 hover:border-white active:scale-95",
  whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-hover active:scale-95",
  ghost: "text-brand-red hover:underline",
};

const sizeClasses: Record<Size, string> = {
  sm: "min-h-[44px] py-2 px-4 text-sm",
  md: "min-h-[44px] py-3 px-6 text-base",
  lg: "min-h-[44px] py-4 px-8 text-lg",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);

  if (props.href !== undefined) {
    const {
      href,
      variant: _v,
      size: _s,
      className: _c,
      children: _ch,
      ...rest
    } = props as ButtonAsAnchor;
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const {
    variant: _v,
    size: _s,
    className: _c,
    children: _ch,
    href: _h,
    ...rest
  } = props as ButtonAsButton;
  return (
    <button type={rest.type ?? "button"} className={classes} {...rest}>
      {children}
    </button>
  );
}
