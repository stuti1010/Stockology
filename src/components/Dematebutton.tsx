"use client"

import Link from "next/link";
import { ShineBorder } from "@/components/ui/shine-border";
import { useTheme } from "next-themes";

interface ShimmerButtonDemoProps {
  text: string;
}

export function ShimmerButtonDemo({ text }: ShimmerButtonDemoProps) {
  const theme = useTheme();
  return (

    <ShineBorder
    className=""
    color={theme.theme === "dark" ? "#F4F9F3" : "#F4F9F3"}
  >
      <Link href="/" className="shadow-2xl  text-center   text-xl rounded-xl   ">{text}
      </Link>
    
    
    </ShineBorder>
  );
}
