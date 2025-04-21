"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref } = useSectionInView("About");
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      className="max-w-[60rem] leading-8 sm:mb-17 scroll-mt-40 my-16 sm:px-4 px-4"
      id="about"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <motion.p
          className="bg-gradient-to-r from-cyan-300 from-[5%] via-cyan-400 via-[45%] to-blue-500 to-[95%] inline-block text-transparent bg-clip-text sm:text-2xl text-xl -tracking-[.02em] font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          About me
        </motion.p>

        <motion.h2
          className="text-5xl sm:text-6xl font-semibold tracking-tight mb-8 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I make web and mobile applications.
        </motion.h2>

        <div ref={textRef}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-base sm:text-xl text-gray-50 font-[400] leading-relaxed sm:pr-48"
          >
            I&apos;m a developer that creates web and mobile applications. I
            have a strong foundation in full-stack development and cloud
            technologies. From my experience at big tech and side projects,
            I&apos;ve developed a good eye for building user-focused products
            that solve real problems.
          </motion.p>
        </div>
      </motion.div>
    </motion.section>
  );
}
