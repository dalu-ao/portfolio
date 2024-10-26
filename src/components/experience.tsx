"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";
import { experienceData } from "@/lib/data";

// Define the gradient array at the top, similar to projects.tsx
const gradients = [
  "bg-gradient-to-r from-emerald-400 via-emerald-400 to-green-400", // green
  "bg-gradient-to-r from-blue-400 via-blue-400 to-cyan-400", // blue
  "bg-gradient-to-r from-orange-600 via-red-500 to-red-500", // red
];

interface ExperienceCardProps {
  startDate: string;
  endDate: string;
  company: string;
  title: string;
  description: string;
}

const ExperienceCard = ({
  startDate,
  endDate,
  company,
  title,
  description,
  className,
}: ExperienceCardProps & { className: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <div className="flex flex-col">
        <h3 className="text-xl sm:text-2xl font-semibold">{company}</h3>
        <span className="text-white/80 mt-1 mb-4 text-sm sm:text-base">
          {startDate} – {endDate}
        </span>

        <div className="h-px bg-white/90 mb-4" />

        <h4 className="text-base sm:text-lg font-medium mb-2">{title}</h4>
        <p className="text-white/80 leading-relaxed text-sm sm:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const { ref: sectionRef } = useSectionInView("Experience");

  // Function to get specific gradient for each card
  const getGradient = (index: number) => {
    if (index === 0) return gradients[0]; // First card gets green
    if (index === 1) return gradients[1]; // Second card gets blue
    return gradients[2]; // Third card gets red
  };

  return (
    <section
      ref={sectionRef}
      className="max-w-[60rem] mx-auto px-4 scroll-mt-28 mb-24"
      id="experience"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 text-center text-white">
            Recent work experiences
          </h2>

          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={index}
              {...experience}
              className={`${getGradient(
                index
              )} rounded-2xl p-6 sm:p-8 mb-6 text-white`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
