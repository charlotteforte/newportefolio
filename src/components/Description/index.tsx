import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import styles from './style.module.scss';
import { slideUp, opacity } from './anim';
import Button from '../common/Button';

export default function Description() {
  const phrase = "Hi! Je suis Charlotte, Étudiante en master de Création Numérique - Design UX / UI.";
  const description = useRef<HTMLDivElement>(null);
  const isInView = useInView(description);

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word: string, index: number) => (
            <span key={index} className={styles.mask}>
              <motion.span
                variants={slideUp(index)} // ✅ On appelle la fonction ici pour obtenir un objet
                initial="initial"
                animate={isInView ? "open" : "closed"}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <motion.p
          variants={opacity} // ✅ opacity est un objet statique, donc on le passe directement
          initial="initial"
          animate={isInView ? "open" : "closed"}
        >
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <a href="/CV" className={styles.link}>
            <Button className={styles.button}>
              <p>CV</p>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
