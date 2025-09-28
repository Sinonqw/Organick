"use client";
import React from "react";
import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import Desc from "@/components/ui/Desc";
import TeamCard from "./TeamCard";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const team = [
  {
    name: "Giovanni Bacardo",
    prof: "Farmer",
    img: "/team/giovani.png",
    media: [
      { name: "facebook", icon: <FaFacebookF />, link: "#" },
      { name: "twitter", icon: <FaTwitter />, link: "#" },
      { name: "instagram", icon: <FaInstagram />, link: "#" },
    ],
  },
  {
    name: "Marianne Loreno",
    prof: "Designer",
    img: "/team/marianne.png",
    media: [
      { name: "facebook", icon: <FaFacebookF />, link: "#" },
      { name: "twitter", icon: <FaTwitter />, link: "#" },
      { name: "instagram", icon: <FaInstagram />, link: "#" },
    ],
  },
  {
    name: "Riga Pelore",
    prof: "Farmer",
    img: "/team/riga.png",
    media: [
      { name: "facebook", icon: <FaFacebookF />, link: "#" },
      { name: "twitter", icon: <FaTwitter />, link: "#" },
      { name: "instagram", icon: <FaInstagram />, link: "#" },
    ],
  },
];

const Team = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="py-[177px]"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <Subtitle className="text-3xl text-primary-green">Team</Subtitle>
        <Title className="text-5xl text-primary-dark">
          Our Organic Experts
        </Title>
        <Desc className="text-xl text-gray-600 mt-4 max-w-[900px] mx-auto">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </Desc>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div variants={itemVariants} key={index}>
            <TeamCard
              key={index}
              name={member.name}
              prof={member.prof}
              media={member.media}
              img={member.img}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Team;
