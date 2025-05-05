import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return <input type={type} className={cn("bg-primary border  p-4 rounded-md border-white/10 focus:border-accent placeholder:text-white/80 outline-none", className)} ref={ref} {...props} />;
});
Input.displayName = "Input";

export { Input };
