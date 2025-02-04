<<<<<<< HEAD
import Image from "next/image";

export default function Home() {
  return (
    <>
    
    </>
=======
import { CardHoverEffectDemo } from "@/components/Cardhover";
import Corevalue from "@/components/Corevalue";
import Mockup from "@/components/Mockup";
import { Testimonials } from "@/components/Testimonals";
// import Value from "@/components/Value";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <div className="">
      <Mockup />
      <CardHoverEffectDemo />
      <Vision />
      
      {/* <Value /> */}
      <Testimonials/>
      <Corevalue />
    </div>
>>>>>>> naina
  );
}
