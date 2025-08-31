import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Desc from "@/components/ui/Desc";
import Button from "@/components/ui/Button";
import styles from "./NewsCard.module.css";

interface INewsCard {
  date: string;
  author: string;
  desc: string;
  title: string;
  img: string;
}

const NewsCard = ({ author, date, desc, title, img }: INewsCard) => {
  const [day, month] = date.split(" ");

  return (
    <article className={styles.newsCard}>
      <div>
        <Image
          alt=""
          src={img}
          width={677}
          height={524}
          className="rounded-2xl"
        />
        <span className={styles.newsCard__date}>
          {day} <br /> {month}
        </span>
      </div>
      <div className={styles.newsCard__content}>
        <div className={styles.newsCard__authorContainer}>
          <Image src={"/icons/author.svg"} alt="" width={18} height={20} />
          <p className={styles.newsCard__author}>{author}</p>
        </div>
        <div>
          <Title size={25}>{title}</Title>
          <Desc size={18}>{desc}</Desc>
        </div>
        <Button className={styles.newsCard__button}>Read More</Button>
      </div>
    </article>
  );
};

export default NewsCard;
