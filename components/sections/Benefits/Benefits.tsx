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
import styles from "./Benefits.module.css"; // Import CSS Module

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
    <section className={styles.benefits}>
      {/* Декоративные фоны */}
      <div className={styles.benefits__bgContainer}>
        <div className={`${styles.benefits__bg} ${styles["benefits__bg--top"]}`} />
        <div className={`${styles.benefits__bg} ${styles["benefits__bg--bottom"]}`} />
      </div>

      {/* Заголовки + отзыв */}
      <div className={styles.benefits__content}>
        <div className={styles.benefits__heading}>
          <Subtitle className={styles.benefits__subtitle} size={36}>
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
            className={styles.benefits__testimonial}
          >
            <Image
              src={t.user}
              alt={t.name}
              width={115}
              height={115}
              className={styles.benefits__userImage}
            />
            <Image
              alt="Rating: 5 out of 5 stars"
              src="/icons/stars.svg"
              width={122}
              height={26}
              className={styles.benefits__rating}
            />
            <Desc size={18} className={styles.benefits__testimonialText}>
              {t.text}
            </Desc>
          </motion.div>
        </AnimatePresence>

        <div className={styles.benefits__userInfo}>
          <h4 className={styles.benefits__userName}>{t.name}</h4>
          <Desc size={15} className={styles.benefits__userRole}>
            {t.role}
          </Desc>
        </div>

        {/* точки пагинации под будущий слайдер */}
        <div className={styles.benefits__pagination}>
          {TESTIMONIALS.map((_, i) => (
            <span
              key={i}
              className={`${styles.benefits__dot} ${
                i === current ? styles["benefits__dot--active"] : ""
              }`}
            />
          ))}
        </div>
      </div>

      {/* Карточки преимуществ */}
      <div className={styles.benefits__cards}>
        {BENEFITS.map((b, i) => (
          <BenefitCard key={i} text={b.text} title={b.title} />
        ))}
      </div>
    </section>
  );
};

export default Benefits;