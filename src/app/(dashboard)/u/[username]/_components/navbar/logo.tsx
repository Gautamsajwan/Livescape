import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex lg:flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1 mr-10 shrink-0 lg:mr-0 lg:shrink">
          <Image src="/squarylines.svg" alt="LiveHub" width="32" height="32" />
        </div>
        <div className={cn("hidden lg:block", poppins.className)}>
          <p className="text-lg font-semibold">LiveHub</p>
          <p className="text-xs text-muted-foreground">Creator dashboard</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
