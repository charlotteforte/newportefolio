'use client';

import { useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Home() {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const thirdText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  const direction = useRef(-1);
  const xPercent = useRef(0);

  const animate = useCallback(() => {
    if (xPercent.current < -100) {
      xPercent.current = 0;
    } else if (xPercent.current > 0) {
      xPercent.current = -100;
    }

    if (firstText.current && secondText.current) {
      gsap.set(firstText.current, { xPercent: xPercent.current });
      gsap.set(secondText.current, { xPercent: xPercent.current });
    }

    xPercent.current += 0.1 * direction.current;
    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (slider.current) {
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.5,
          start: 0,
          end: window.innerHeight,
          onUpdate: (e) => (direction.current = e.direction * -1),
        },
        x: "-500px",
      });
    }

    requestAnimationFrame(animate);
  }, [animate]);

  return (
    <main className={styles.main}>
      <Image src="/images/5.png" fill={true} alt="" />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Portefolio -</p>
          <p ref={secondText}>Portefolio -</p>
          <p ref={thirdText}>Portefolio -</p>
        </div>
      </div>
    </main>
  );
}

