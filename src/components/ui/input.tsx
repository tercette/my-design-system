import * as React from "react";

import { cn } from "@/lib/utils";

const inputVariants = {
  sm: "h-8 px-3",
  default: "h-9 px-3 py-1",
  lg: "h-10 px-4 py-2",
} as const;

type InputSize = keyof typeof inputVariants; // 🔹 Define um tipo baseado nas chaves do objeto

interface InputProps extends React.ComponentProps<"input"> {
  inputSize?: InputSize; // 🔹 Renomeamos de `size` para `inputSize`
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, inputSize = "default", ...props }, ref) => {
    const variantClass = inputVariants[inputSize] ?? inputVariants.default; // 🔹 Garante que sempre será válido

    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-md border border-input bg-transparent shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          variantClass,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
