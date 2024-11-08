import { motion } from "framer-motion";
import React from "react";

const PageTransitionLayout = ({ children }) => {
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

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      transition={{ duration: 0.35 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransitionLayout;
