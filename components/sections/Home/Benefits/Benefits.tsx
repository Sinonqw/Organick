"use client";

import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import Desc from "@/components/ui/Desc";
import Image from "next/image";
import BenefitCard from "./BenefitCard";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TESTIMONIALS from "@/data/Testimonials";
import BENEFITS from "@/data/Benefits";

const Benefits = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const t = TESTIMONIALS[current];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent((prev) => {
        if (prev === TESTIMONIALS.length - 1) {
          setDirection("prev");
          return prev - 1;
        } else if (prev === 0) {
          setDirection("next");
          return prev + 1;
        } else if (direction === "next") {
          return prev + 1;
        } else {
          return prev - 1;
        }
      });
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [direction]);

  const testimonialVariants = {
    initial: { opacity: 0, y: 50, scale: 0.8 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.8 },
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-[164px] lg:pb-[164px]">
      {/* Декоративные фоны */}
      <div className="hidden lg:block absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/benefitsBg.png')] bg-no-repeat bg-contain" />
        <div className="absolute inset-0 bg-[url('/benefitsBg.png')] bg-no-repeat bg-contain transform rotate-180" />
      </div>

      {/* Заголовки + отзыв */}
      <div className="relative z-10 max-w-[800px] mx-auto text-center pb-16 mb-16 sm:pb-[102px] sm:mb-[102px] border-b border-gray-300 px-4">
        <div className="mb-8 sm:mb-12">
          <Subtitle className="mb-2 text-2xl sm:text-3xl lg:text-4xl">
            Testimonial
          </Subtitle>
          <Title className="text-3xl sm:text-4xl md:text-5xl">
            What Our Customer Saying?
          </Title>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={testimonialVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.7,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="flex flex-col items-center mb-8 min-h-[150px]"
          >
            <Image
              src={t.user}
              alt={t.name}
              width={115}
              height={115}
              className="rounded-full mb-5"
            />
            <Image
              alt="Rating: 5 out of 5 stars"
              src="/icons/stars.svg"
              width={122}
              height={26}
              className="mb-6"
            />
            <Desc className="text-sm sm:text-base lg:text-lg max-w-[700px]">
              {t.text}
            </Desc>
          </motion.div>
        </AnimatePresence>

        <div className="mb-5">
          <h4 className="roboto font-semibold text-lg sm:text-xl text-[#274C5B] mb-1">
            {t.name}
          </h4>
          <Desc className="text-xs sm:text-sm">{t.role}</Desc>
        </div>

        {/* точки пагинации */}
        <div className="flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <span
              key={i}
              className={`block w-2 h-2 rounded-full transition-colors duration-300 ${
                i === current ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Карточки преимуществ */}
      <div className="relative z-10 gap-3 max-w-full lg:max-w-[1030px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-items-center sm:gap-3 lg:gap-16">
        {BENEFITS.map((b, i) => (
          <BenefitCard key={i} text={b.text} title={b.title} />
        ))}
      </div>
    </section>
  );
};

export default Benefits;

