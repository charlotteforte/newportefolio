import { useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Magnetic from '@/components/common/Magnetic';


interface SliderItem {
    color: string;
    src: string;
}

const slider1: SliderItem[] = [
    {
        color: "#000",
        src: "diorama2.png"
    },
    {
        color: "#000",
        src: "5.png"
    },
    {
        color: "#000",
        src: "unity.png"
    },
    {
        color: "#000",
        src: "test55.png"
    }
];

const slider2: SliderItem[] = [
    {
        color: "#000",
        src: "test55.png"
    },
    {
        color: "#000",
        src: "unity.png"
    },
    {
        color: "#000",
        src: "5.png"
    },
    {
        color: "#000",
        src: "diorama2.png"
    }
];

const Index: React.FC = () => {
    const container = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

    const [rotate, setRotate] = useState(0);

    return (
        <div ref={container} className={styles.slidingImages}>
          
            <div className={styles.buttonContainer}>
                <Magnetic>
                    <a href="/projets" className={styles.link}>
                        <button className={styles.button}>See More Projects..</button>
                    </a>
                </Magnetic>
            </div>

            <motion.div style={{ x: x1 }} className={styles.slider}>
                {slider1.map((project, index) => (
                    <div key={index} className={styles.project} style={{ backgroundColor: project.color }}>
                        <div className={styles.imageContainer}>
                            <Image 
                                fill={true}
                                alt="image"
                                src={`/images/${project.src}`} />
                        </div>
                    </div>
                ))}
            </motion.div>
            
            <motion.div style={{ x: x2 }} className={styles.slider}>
                {slider2.map((project, index) => (
                    <div key={index} className={styles.project} style={{ backgroundColor: project.color }}>
                        <div className={styles.imageContainer}>
                            <Image 
                                fill={true}
                                alt="image"
                                src={`/images/${project.src}`} />
                        </div>
                    </div>
                ))}
                <motion.svg style={{ rotate, scale: 2 }} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                </motion.svg>
            </motion.div>
            
            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    );
};

export default Index;
