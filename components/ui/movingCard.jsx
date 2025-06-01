"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    name: "Web Development",
    quote:
      "Custom-built, responsive web solutions using modern technologies to meet your business needs.",
    title: "Details",
  },
  {
    name: "Maintenance & Support Services",
    quote:
      "Technical support and regular updates to ensure your web assets run smoothly.",
    title: "Details",
  },
  {
    name: "UI/UX Design",
    quote:
      "User-centric interface designs that combine aesthetics with functionality for memorable digital experiences.",
    title: "Details",
  },
  {
    name: "SEO Services",
    quote:
     "Targeted digital marketing strategies to boost your brand awareness and conversion rates.",
    title: "Details",
  },
  {
    name: "Digital Marketing",
    quote:
      "Targeted digital marketing strategies to boost your brand awareness and conversion rates.",
    title: "Details",
  },
  {
    name: "Performance Optimization",
    quote:
      "Technical solutions to maximize your website speed and enhance user experience.",
    title: "Details",
  },
];

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[22rem] rounded-md flex flex-col antialiased  bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
