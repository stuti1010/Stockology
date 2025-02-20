import Bigblogcard from "@/components/Bigblogcard";
import { CardHoverEffectDemo } from "@/components/Cardhover";
import Circle from "@/components/Circle";

import Corevalue from "@/components/Corevalue";
import Department from "@/components/Department";
// import Editor from "@/components/Editor";
import Mockup from "@/components/Mockup";
import { Testimonials } from "@/components/Testimonals";
import CoreValues2 from "@/components/Value";
// import Value from "@/components/Value";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <div className="">
      <Mockup />
      <Department/>
       <CardHoverEffectDemo />
      <Vision />
    {/* <Circle/> */}
      <Testimonials/>
      {/* <Corevalue />  */}
      <CoreValues2/>
      {/* <Bigblogcard/> */}
    </div>
  );
}
