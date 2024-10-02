import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  label: string;
  children: React.ReactNode;
  asChild?: boolean;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
}

function Hint({ label, children, asChild, side, align }: Props) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
        <TooltipContent
          className="text-black bg-white"
          side={side}
          align={align}
          avoidCollisions={true}
        >
          <p className="font-semibold py-[2px] pt-[2.5px]">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export { Hint };
