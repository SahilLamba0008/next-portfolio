import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type RevealYProps = {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  delay?: number;
  direction?: string;
  className?: string;
};
const RevealY = ({
  children,
  width,
  height,
  delay = 0.5,
  direction,
  className
  // background,
  // delayOverlay,
}: RevealYProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animationController = useAnimation();
  const slideController = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationController.start("visible");
      slideController.start("visible");
    }
  }, [isInView, animationController, slideController]);

  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        overflow: "hidden",
      }}
      ref={ref}
      className={className}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: direction === "from-top" ? -20 : 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animationController}
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>
      {/* <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideController}
        transition={{ duration: 0.5, ease: "easeIn", delay: delayOverlay || 0 }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: background || "cyan",
          borderRadius: "0.7rem",
          width: "fit-content",
        }}
      /> */}
    </div>
  );
};

export default RevealY;
