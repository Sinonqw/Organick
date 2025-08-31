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
        if (prev == TESTIMONIALS.length - 1) {
          setDirection("prev");
          return prev - 1;
        } else if (prev == 0) {
          setDirection("next");
          return prev + 1;
        } else if (direction == "next") {
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
    <section className="relative overflow-hidden py-[164px]">
      {/* Декоративные фоны */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[url('/benefitsBg.png')] bg-no-repeat bg-contain" />
        <div className="absolute inset-0 bg-[url('/benefitsBg.png')] bg-no-repeat bg-contain rotate-180" />
      </div>

      {/* Заголовки + отзыв */}
      <div className="relative z-10 max-w-[800px] mx-auto text-center pb-[102px] mb-[102px] border-b border-b-[#e0e0e0]">
        <div className="mb-[60px]">
          <Subtitle className="mb-2" size={36}>
            Testimonial
          </Subtitle>
          <Title size={50}>What Our Customer Saying?</Title>
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
            className="flex flex-col items-center mb-5 min-h-[150px]"
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
            <Desc size={18} className="max-w-[700px]">
              {t.text}
            </Desc>
          </motion.div>
        </AnimatePresence>

        <div className="mb-5">
          <h4 className="roboto text-[25px] font-semibold text-[#274C5B]">
            {t.name}
          </h4>
          <Desc size={15}> {t.role}</Desc>
        </div>

        {/* точки пагинации под будущий слайдер */}
        <div className="flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <span
              key={i}
              className={`block w-2 h-2 rounded-full ${
                i === current ? "bg-[#274C5B]" : "bg-black/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Карточки преимуществ */}
      <div className="relative z-10 max-w-[1030px] mx-auto flex justify-center gap-[60px]">
        {BENEFITS.map((b, i) => (
          <BenefitCard key={i} text={b.text} title={b.title} />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
