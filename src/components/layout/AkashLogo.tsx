import Image from "next/image";

interface AkashLogoProps {
  height?: number;
  priority?: boolean;
}

export function AkashLogo({ height = 48, priority = false }: AkashLogoProps) {
  return (
    <Image
      src="/icons/logo.svg"
      alt="Akash Car Service & Driver Centre"
      width={Math.round(height * (1750 / 899))}
      height={height}
      style={{ height, width: "auto" }}
      priority={priority}
    />
  );
}
