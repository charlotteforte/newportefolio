import { Variants } from 'framer-motion';

export interface PerspectiveAnimation extends Variants {
  initial: {
    opacity: number;
    rotateX: number;
    translateY: number;
    translateX: number;
    display: string;
  };
  enter: {
    opacity: number;
    rotateX: number;
    translateY: number;
    translateX: number;
    display: string;
    transition: {
      duration: number;
      delay: number;
      ease: number[];
      opacity: { duration: number };
    };
  };
  exit: {
    opacity: number;
    display: string;
    transition: {
      duration: number;
      type: string;
      ease: number[];
    };
  };
}

export const perspective: PerspectiveAnimation = {
  initial: { 
    opacity: 0, 
    rotateX: 90, 
    translateY: 80, 
    translateX: -20,
    display: 'none'
  },
  enter: {
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    display: 'block',
    transition: {
      duration: 0.65,
      delay: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  },
  exit: {
    opacity: 0,
    display: 'none',
    transition: {
      duration: 0.5,
      type: "linear",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

