"use client";

import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export default function Journey() {
  const timelineData = [
    {
      title: "2021",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700 dark:text-neutral-300">
            <h1 className="text-black md:text-2xl text-lg text-bold ">Stockology Security Pvt Ltd Incorporation</h1>
            in 2021, Stockology was founded with a vision to simplify stock market insights for investors. From the beginning, we focused on delivering reliable market analysis, empowering traders with data-driven decisions.
          </p>
          <Image
            src="/journey.jpg" // Replace with your image path
            alt="2021 Journey"
            width={300}
            height={100}
            className="rounded-lg"
          />
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700 dark:text-neutral-300">
            <h1 className="text-black md:text-2xl  text-lg text-bold ">Launch Stockology Mobile Application</h1>
            In 2022, Stockology expanded its reach by establishing a training institute in Bhopal, empowering aspiring traders with in-depth market knowledge. Our institute became a hub for financial education, equipping individuals with the skills to navigate the stock market confidently.
          </p>
          <Image
            src="/journey1.jpg" // Replace with your image path
            alt="2022 Journey"
            width={300}
            height={100}
            className="rounded-lg"
          />
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 dark:text-neutral-300">
            <h1 className="text-black text-bold md:text-2xl text-lg"> Offline Training Institute Setup</h1>
            In 2023, we established offline education initiatives to empower aspiring traders with in-depth market knowledge. Our expert-led sessions provided hands-on training, bridging the gap between theory and real-world stock market strategies.
          </p>
          <Image
            src="/journey2.jpg" // Replace with your image path
            alt="2023 Journey"
            width={300}
            height={100}
            className="rounded-lg"
          />
        </div>
      ),
    },
    
    {
      title: "2025",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700 dark:text-neutral-300">
            <h1 className="text-black text-bold md:text-2xl text-lg">Got Licence Of NSE For Stock Broking </h1>
            In 2025, Stockology achieved a major milestone by securing its official stock broker license. This marked a new era of trust, compliance, and expanded investment opportunities for our clients.
          </p>
          <Image
            src="/journey2.jpg" // Replace with your image path
            alt="2025 Journey"
            width={300}
            height={100}
            className="rounded-lg"
          />
        </div>
      ),
    },
  ];

  return (
    <div className=" dark:bg-neutral-950 py-4 container mx-auto px-4 md:px-10">
      <Timeline data={timelineData} />
    </div>
  );
}