import Image from "next/image";
import { Syne } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
});

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex lg:flex items-center gap-x-2 hover:opacity-75 transition">
        <div className="mr-10 shrink-0 lg:mr-0 lg:shrink">
          <Image src="/ls-logo.svg" alt="LiveHub" width="54" height="54" />
        </div>
        <div className={cn('hidden lg:block', syne.className)}>
          <p className="text-lg font-extrabold text-indigo-100">LiveScape</p>
          <p className="text-xs font-bold text-indigo-100">Creater Dashboard</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo