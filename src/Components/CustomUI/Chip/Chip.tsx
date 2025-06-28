import { cn } from "@/lib/util";

export interface ChipProps {
  tag: string;
  color?: "primary" | "secondary" | "accent" | "danger";
}

export function Chip({ tag, color = "primary" }: ChipProps) {
  const colorClasses = {
    primary: "bg-glass-sage text-primary-400 border-primary-600",
    secondary: "bg-glass-sage text-secondary-400 border-secondary-600",
    accent: "bg-glass-sage text-accent-400 border-accent-600",
    danger: "bg-glass-error text-error-400 border-error-600",
  };

  return (
    <span
      className={cn(
        "px-2 text-sm rounded-full",
        colorClasses[color]
      )}
    >
      {tag}
    </span>
  );
}
