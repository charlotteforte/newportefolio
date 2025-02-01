import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { perspective } from './anim';
import styles from './style.module.scss';
import { links } from './data';


interface NavProps {
  isActive: boolean;
}

export default function Nav({ isActive }: NavProps) {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        <AnimatePresence>
          {isActive && links.map((link, i) => {
            const { title, href } = link;
            return (
              <div key={`b_${i}`} className={styles.linkContainer}>
                <motion.div
                  custom={i}
                  variants={perspective}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <Link key={i} href={href}>
                    {title}
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
