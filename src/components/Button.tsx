import { Slot } from '@radix-ui/react-slot';
import { clsx } from "clsx";
import { ReactNode } from 'react'

export interface ButtonProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}
export function Button({ size = "md", children, asChild }: ButtonProps) {

    const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx("text-gray-600 font-sans font-semibold bg-cyan-500 border border-cyan-300 rounded px-3 py-4 transition-colors cursor-pointer w-full hover:bg-cyan-300 focus:ring-2 ring-white ", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}
