import React from "react";
import Image from "next/image";
import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import Desc from "@/components/ui/Desc";
import COMPANY_INFO from "@/data/Story";
import styles from "./Story.module.css";

const Story = () => {
  return (
    <section className={styles.storySection}>
      <div className={styles.storySection__background}>
        <Image alt="" src={"/storyBg.png"} width={952} height={931} />
      </div>
      <div className={styles.storySection__content}>
        <div className={styles.storySection__header}>
          <Subtitle size={36} className={styles.storySection__subtitle}>
            Eco Friendly
          </Subtitle>
          <Title size={50}>Econis is a Friendly Organic Store</Title>
        </div>
        <div className={styles.storySection__info}>
          {COMPANY_INFO.map((item, i) => (
            <div key={i}>
              <Title color="#274C5B" bold="medium">
                {item.title}
              </Title>
              <Desc size={18}>{item.description}</Desc>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;
