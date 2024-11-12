import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const LogoTitle = () => {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <div>
        <Image
          src="/ls-logo.svg"
          alt="LiveScape logo"
          height="80"
          width="80"
        />
      </div>
      <div className={cn(
        "flex flex-col items-center",
        poppins.className,
      )}>
        <p className="text-xl font-semibold">
          LiveScape
        </p>
        <p className="text-sm text-muted-foreground">
          Let&apos;s stream
        </p>
      </div>
    </div>
  );
};