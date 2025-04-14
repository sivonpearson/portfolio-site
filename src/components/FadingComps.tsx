import React from "react";
import { easeInOut, motion } from "framer-motion";

type PageScrollProps = {
  amountVisible?: number;
  animDuration?: number;
  children: React.ReactNode | React.ReactNode[];
};

export const AppearingComp: React.FC<PageScrollProps> = ({
  amountVisible = 0.5,
  animDuration = 3,
  children,
}: PageScrollProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: amountVisible }} // Animation triggers only once when element comes into view
      transition={{ duration: animDuration, ease: easeInOut }}
    >
      {children}
    </motion.div>
  );
};

export const SlideLeftComp: React.FC<PageScrollProps> = ({
  amountVisible = 0.5,
  animDuration = 3,
  children,
}: PageScrollProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: amountVisible }} // Animation triggers only once when element comes into view
      transition={{ duration: animDuration, ease: easeInOut }}
    >
      {children}
    </motion.div>
  );
};

export const SlideRightComp: React.FC<PageScrollProps> = ({
  amountVisible = 0.5,
  animDuration = 3,
  children,
}: PageScrollProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: amountVisible }} // Animation triggers only once when element comes into view
      transition={{ duration: animDuration, ease: easeInOut }}
    >
      {children}
    </motion.div>
  );
};

export const IlluminatingComp: React.FC<PageScrollProps> = ({
  amountVisible = 0.5,
  animDuration = 3,
  children,
}: PageScrollProps) => {
  return (
    <motion.div
      initial={{ boxShadow: "0px 0px #fff", borderRadius: "0.5rem" }}
      whileInView={{ boxShadow: "10px 10px #fff", borderRadius: "0.5rem" }}
      viewport={{ once: false, amount: amountVisible }} // Animation triggers only once when element comes into view
      transition={{ duration: animDuration, ease: easeInOut }}
    >
      {children}
    </motion.div>
  );
};
