"use client";
import { motion, AnimationProps } from "framer-motion";

interface SlideProps extends AnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const Slide = ({ children, className, delay }: SlideProps) => {
  return (
    <motion.div
      variants={{
        start: { opacity: 0, translateY: 10 },
        end: { opacity: 1, translateY: 0 },
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.3,
        delay: delay,
        stiffness: 0.5,
      }}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
    >
      <div className={className}>{children}</div>
    </motion.div>
  );
};
