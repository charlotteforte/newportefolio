import { Variants } from 'framer-motion';

interface TransitionProps {
  duration: number;
  delay?: number;
}

interface AnimationProps {
  initial: {
    y: string;
    opacity: number;
  };
  open: {
    y: string;
    opacity: number;
    transition: TransitionProps;
  };
  closed: {
    y: string;
    opacity: number;
    transition: TransitionProps;
  };
}

export const slideUp = (i: number): Variants => ({
  initial: { y: "100%", opacity: 0 },
  open: { 
    y: "0%", 
    opacity: 1,
    transition: { duration: 0.5, delay: 0.01 * i }
  },
  closed: { 
    y: "100%", 
    opacity: 0,
    transition: { duration: 0.5 }
  }
});

export const opacity: Variants = {
  initial: { y: "0%", opacity: 0 },
  open: { 
    y: "0%",
    opacity: 1,
    transition: { duration: 0.5 }
  },
  closed: { 
    y: "100%",
    opacity: 0,
    transition: { duration: 0.5 }
  }
};