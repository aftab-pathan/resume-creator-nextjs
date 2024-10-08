"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
// import { cx } from "../utility/helper/utility";

function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header
      aria-label="Site Header"
      className={cn(
        "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12 sticky top-0 z-40 bg-white",
      )}
    >
      <div className="flex h-10 w-full items-center justify-between">
        <Link href="/">
          <div className="flex items-center justify-center gap-1">
            <Image
              src={"logo.svg"}
              width={16}
              height={16}
              alt="logo"
              className="h-8 w-full"
            />
            <h1 className="text-xl whitespace-nowrap font-bold text-primary">
              ProResume
            </h1>
          </div>
        </Link>
        <nav
          aria-label="Site Nav Bar"
          className="flex items-center gap-2 text-sm font-medium"
        >
          {[["/resume-builder", "Builder"]].map(([href, text]) => (
            <Link
              key={text}
              className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
              href={href}
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
