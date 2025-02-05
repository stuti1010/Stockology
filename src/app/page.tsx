import Image from "next/image";
import Mockup from "./Components/Mockup";
import { CardHoverEffectDemo } from "./Components/Cardhover";
import Vision from "./Components/Vision";
import { Testimonials } from "./Components/Testimonals";
import Value from "./Components/Value";
import Corevalue from "./Components/Corevalue";

export default function Home() {
  return (
    <>
    <Mockup/>
    <CardHoverEffectDemo/>
    <Vision/>

    <Testimonials/>
    
    <Corevalue/>
    </>
  );
}
