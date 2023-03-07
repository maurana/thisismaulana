import React from 'react'
import {motion} from "framer-motion";

interface IAnimatedProps {
    children: any,
    className: any,
}

export default function ScrollAnimationWrapper({children, className, ...props}: IAnimatedProps) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}