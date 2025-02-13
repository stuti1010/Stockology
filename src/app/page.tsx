import Bigblogcard from "@/components/Bigblogcard";
import { CardHoverEffectDemo } from "@/components/Cardhover";

import Corevalue from "@/components/Corevalue";
// import Editor from "@/components/Editor";
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
    
      <Testimonials/>
      <Corevalue />
    
      {/* <Bigblogcard/> */}
    </div>
  );
}
