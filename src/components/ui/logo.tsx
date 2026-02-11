import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoSize = "xs" | "sm" | "md" | "lg";

const sizeMap: Record<LogoSize, string> = {
  xs: "w-[200px] h-16",
  sm: "w-[300px] h-20",
  md: "w-[380px] h-24",
  lg: "w-[460px] h-28",
};

interface LogoProps {
  className?: string;
  size?: LogoSize;
}

export function Logo({ className, size = "md" }: LogoProps) {
  return (
    <Link href="/" className={cn("group inline-flex items-center", className)}>
      <span className={cn(
        "relative overflow-hidden rounded-2xl bg-transparent",
        sizeMap[size]
      )}>
        <Image
          src="/muiz-dev-logo.png"
          alt="Muiz-Dev"
          fill
          sizes="(max-width: 768px) 160px, (max-width: 1200px) 190px, 220px"
          className="object-contain object-center"
          priority
        />
      </span>
      <span className="sr-only">Muiz-Dev</span>
    </Link>
  );
}
