// components/AboutUs.js
import React from "react";
import Image from "next/image";
import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import Desc from "@/components/ui/Desc";
import Button from "@/components/ui/Button";
import FeatureItem from "./FeatureItem";
import features from "@/data/Features";
import styles from "./AboutUs.module.css"; 

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.aboutUs__imageContainer}>
        <Image
          src={"/citrus.png"}
          alt="photo"
          width={911}
          height={867}
          className={styles.aboutUs__image}
        />
      </div>

      <div className={styles.aboutUs__content}>
        <div className={styles.aboutUs__textBlock}>
          <Subtitle size={36} className={styles.aboutUs__subtitle}>
            About Us
          </Subtitle>
          <Title size={50} className={styles.aboutUs__title}>
            We Believe in Working Accredited Farmers
          </Title>
          <Desc className={styles.aboutUs__desc}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </Desc>
        </div>

        <div className={styles.aboutUs__featuresList}>
          {features.map((item, i) => (
            <FeatureItem
              desc={item.desc}
              img={item.img}
              title={item.title}
              key={i}
            />
          ))}
        </div>

        <Button colorBg="#274C5B" colorText="#FFFFFF">
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default AboutUs;