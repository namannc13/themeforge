import { cn } from "@/lib/utils";

function Heading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={cn(
        "tracking-[0.075em] flex items-center font-semibold text-lg",
        className
      )}
    >
      {children}
    </h4>
  );
}

export default Heading;
