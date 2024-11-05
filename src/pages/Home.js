import React from "react";
import style from "./home.module.css";
import Granim from "react-granim";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const nav = useNavigate();

  const pageTransition = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  };

  const handleClick = () => {
    // 애니메이션이 완료된 후 페이지 이동
    const element = document.querySelector(`.${style.container}`);
    element.style.animation = `${style.fadeOut} 0.5s forwards`;

    setTimeout(() => {
      nav("/product/all");
    }, 500);
  };

  return (
    <motion.div
      onClick={handleClick}
      className={style.container}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      transition={{ duration: 0.5 }}
    >
      <Granim
        id="granim"
        states={{
          "default-state": {
            gradients: [
              ["#FFD5E6", "#E7F1FF"],
              ["#E7F1FF", "#D2E5FF"],
              ["#D2E5FF", "#BED9FF"],
              ["#BED9FF", "#FFC0E4"],
              ["#FFC0E4", "#FFD5E6"],
            ],
          },
        }}
        direction="diagonal"
        isPausedWhenNotInView={true}
        stateTransitionSpeed={0}
        style={{
          position: "absolute",
          width: "1280px",
          height: "800px",
          zIndex: 0,
        }}
      />
      <motion.div
        className={style.content}
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.h1 className={style.icon} whileHover={{ scale: 1.1 }}>
          <img src="idolmateLogo.png" alt="logo" />
        </motion.h1>
        <motion.div className={style.main_img} whileHover={{ scale: 1.05 }}>
          <img src="main_image.png" alt="main_img" />
        </motion.div>
        <motion.p
          className={style.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          지금부터 최고의 세계를 보여줄게!
        </motion.p>
        <motion.p
          className={style.touch}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          TOUCH HERE
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
