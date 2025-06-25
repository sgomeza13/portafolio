import { cn } from "@/lib/util";

export function UKFlag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={cn(className, "w-8 h-4 rounded-sm overflow-hidden")}>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

export function SpainFlag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={cn(className, "w-8 h-4 rounded-sm overflow-hidden")}>
      <rect width="60" height="30" fill="#AA151B" />
      <rect y="10" width="60" height="10" fill="#F1BF00" />
    </svg>
  );
}
