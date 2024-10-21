import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import "./styles.css";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        destructive:
          "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline:
          "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        ghost:
          "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
        rounded:
          "flex justify-center items-center text-base rounded-sm border border-accent overflow-hidden groupbtn relative hover:text-primary transition duration-200 ease-linear text-foreground",
        simple:
          "flex justify-center items-center text-base rounded-sm border border-accent overflow-hidden hover:bg-accent relative hover:text-primary transition duration-200 ease-linear text-foreground",
        secondary:
          "flex justify-center items-center text-base rounded-full border border-accent overflow-hidden hover:text-primary hover:bg-accent hover:transition-all duration-200 ease-linear text-foreground",
        icon: "flex justify-center items-center text-base rounded-full border border-secondrytext overflow-hidden hover:text-primary hover:bg-accent hover:transition-all duration-200 ease-linear text-secondrytext hover:border-none",
        profile:
          "flex justify-center items-center text-base rounded-md bg-accent overflow-hidden hover:text-foreground hover:bg-primary hover:border hover:border-accent hover:transition-all duration-200 ease-linear text-primary",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: " px-3 py-2",
        icon: "h-10 w-10",
        profile: "h-10 w-10",
        full: "w-full py-3",
        md: "w-[70%] py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
