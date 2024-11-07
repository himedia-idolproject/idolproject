import React, { useState } from "react";
import { motion } from "framer-motion";
import Granim from "react-granim";
import { useNavigate } from "react-router-dom";
import style from "./home.module.css";

export default function Home() {
  const nav = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);

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
    if (!isNavigating) {
      setIsNavigating(true);
      nav("/product/all");
    }
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
              ["#FF1493", "#8A2BE2"],
              ["#8A2BE2", "#00CED1"],
              ["#00CED1", "#FF69B4"],
              ["#FF69B4", "#4169E1"],
              ["#4169E1", "#FF1493"],
            ],
            transitionSpeed: 2000,
            loop: true,
          },
        }}
        direction="left-right"
        isPausedWhenNotInView={false}
        stateTransitionSpeed={1500}
        style={{
          position: "absolute",
          width: "1280px",
          height: "800px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
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
