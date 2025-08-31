// components/FeatureItem.js
import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Desc from "@/components/ui/Desc";
import styles from "./FeatureItem.module.css"; // Импортируем стили

interface IFeatureItem {
  img: string;
  title: string;
  desc: string;
}

const FeatureItem = ({ img, title, desc }: IFeatureItem) => {
  return (
    <div className={styles.featureItem}>
      <div className={styles.featureItem__imageWrapper}>
        <Image
          alt="icon"
          src={img}
          width={52}
          height={52}
          className={styles.featureItem__image}
        />
      </div>
      <div className={styles.featureItem__content}>
        <Title size={25} className={styles.featureItem__title}>
          {title}
        </Title>
        <Desc className={styles.featureItem__desc}>
          {desc}
        </Desc>
      </div>
    </div>
  );
};

export default FeatureItem;