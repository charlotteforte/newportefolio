'use client';

import { useRef, useEffect, useCallback } from "react";
import styles from './style.module.scss';
import Image from 'next/image';

export default function Index({ projects, reversed }: { projects: any[], reversed?: boolean }) {
  const firstImage = useRef<HTMLDivElement | null>(null);
  const secondImage = useRef<HTMLDivElement | null>(null);
  
  let xPercent = reversed ? 100 : 0;

  const manageMouseMove = useCallback((e: MouseEvent) => {
    const { clientX } = e;
    let xPercent = (clientX / window.innerWidth) * 100;
  
    const firstImagePercent = 66.66 - (xPercent * 0.33);
    const secondImagePercent = 33.33 + (xPercent * 0.33);
  
    if (firstImage.current && secondImage.current) {
      firstImage.current.style.width = `${firstImagePercent}%`;
      secondImage.current.style.width = `${secondImagePercent}%`;
    }
  }, []); // ✅ Pas de dépendances => ne change jamais
  
  useEffect(() => {
    document.addEventListener("mousemove", manageMouseMove);
    return () => {
      document.removeEventListener("mousemove", manageMouseMove);
    };
  }, [manageMouseMove]); // ✅ manageMouseMove est stable

  useEffect(() => {
    document.addEventListener('mousemove', manageMouseMove);
    return () => {
      document.removeEventListener('mousemove', manageMouseMove);
    };
  }, [manageMouseMove]); 

  const renderMedia = (src: string, type: 'image' | 'video') => {
    if (type === 'image') {
      return (
        <Image 
          src={`/images/${src}`}
          fill={true}
          alt="image"
        />
      );
    } else if (type === 'video') {
      return (
        <video 
          src={`/videos/${src}`} 
          autoPlay 
          loop 
          muted
          style={{ width: '100%', height: '100%' }}
        />
      );
    }
    return null;
  };

  return (
    <div className={styles.double}>
      {/* Première image ou vidéo */}
      <div ref={firstImage} className={styles.imageContainer}>
        <div className={styles.stretchyWrapper}>
          {renderMedia(projects[0].src, projects[0].src.endsWith('.mp4') ? 'video' : 'image')}
        </div>
        <div className={styles.body}>
          <h3>{projects[0].name}</h3>
          <p>{projects[0].description}</p>
          <p>{projects[0].year}</p>
        </div>
      </div>

      {/* Deuxième image ou vidéo */}
      <div ref={secondImage} className={styles.imageContainer}>
        <div className={styles.stretchyWrapper}>
          {renderMedia(projects[1].src, projects[1].src.endsWith('.mp4') ? 'video' : 'image')}
        </div>
        <div className={styles.body}>
          <h3>{projects[1].name}</h3>
          <p>{projects[1].description}</p>
          <p>{projects[1].year}</p>
        </div>
      </div>
    </div>
  );
}

