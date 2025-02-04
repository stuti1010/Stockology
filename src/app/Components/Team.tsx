"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO & Founder",
    image: "/admin.jpeg",
    description:
      "Visionary leader with 10+ years of experience in tech innovation.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO",
    image: "/admin.jpeg",
    description:
      "Expert in AI and machine learning, driving technological advancements.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Lead Designer",
    image: "https://via.placeholder.com/150",
    description:
      "Creative mind behind our stunning user interfaces and experiences.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Lead Designer",
    image: "https://via.placeholder.com/150",
    description:
      "Creative mind behind our stunning user interfaces and experiences.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Lead Designer",
    image: "https://via.placeholder.com/150",
    description:
      "Creative mind behind our stunning user interfaces and experiences.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Lead Designer",
    image: "https://via.placeholder.com/150",
    description:
      "Creative mind behind our stunning user interfaces and experiences.",
  },
];

export default function MeetOurTeam() {
  return (
    <div className="py-14 px-6 md:px-12 lg:px-20 xl:px-36 container mx-auto">
      <h1 className="md:text-4xl text-2xl font-bold text-black text-center mb-10">
        Meet Our Team
      </h1>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="mySwiper w-full" 
           breakpoints={{
          430: { slidesPerView: 1 },
          768: { slidesPerView: 2 }, 
          1024: { slidesPerView: 3 }, 
        }}
      >
        {teamMembers.map((member) => (
          <SwiperSlide key={member.id}>
            <div className=" relative bg-white rounded-3xl shadow-lg overflow-hidden transition-transform  border-2 border-black/30 group w-full">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-end p-6">
                <h2 className=" text-lg font-bold  text-white">{member.name}</h2>
                <p className="text-sm text-gray-300">{member.role}</p>
                <div className='absolute  bottom-0 p-4 bg-black/35 bg-opacity-30 opacity-0 bg-cover group-hover:opacity-100 transition-opacity duration-300 inset-x-0'>
                <p className="text-sm text-gray-200 mt-3 text-center">{member.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
