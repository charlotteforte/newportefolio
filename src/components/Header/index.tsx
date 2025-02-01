'use client';
import React, { useState } from 'react';
import Button from './Button';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import Nav from './Nav';

const menu = {
  open: {
    width: "480px",
    height: "650px",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
  }
};

interface ButtonProps {
  isActive: boolean;
  toggleMenu: () => void;
}

export default function Index() {
  const [isActive, setIsActive] = useState<boolean>(false);
  
  return (
    <div className={styles.header}>
      <motion.div
        className={styles.menu}
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <Nav isActive={isActive} />
      </motion.div>
      <Button 
        isActive={isActive} 
        toggleMenu={() => setIsActive(!isActive)} 
      />
    </div>
  );
}
