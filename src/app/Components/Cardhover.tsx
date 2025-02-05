"use client"
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="container mx-auto ">
        <div className="relative flex w-full py-10 flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
      <p className="z-10 whitespace-pre-wrap text-center md:text-5xl text-2xl  font-semibold tracking-tighter text-black dark:text-white">
        <h1>All Your Finances, Simplified in One Spot</h1>
      <div className="max-w-7xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
      </p>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,transparent)]",
        )}
      />
    </div>
  
    </div>
  );
}
export const projects = [
  
  {
    title: "Mutual Funds",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "",
  },
  {
    title: "Insurance",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "",
  },
  {
    title: "Loans",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "",
  },
  {
    title: "Bond",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "",
  },
  {
    title: "NPS",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "",
  },
  {
    title: "IPO",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "",
  },
  
];
