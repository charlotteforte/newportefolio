import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MagneticProps {
  children: React.ReactElement;
}

const Index: React.FC<MagneticProps> = ({ children }) => {
  const magnetic = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = magnetic.current;
    if (!element) return;

    const xTo = gsap.quickTo(element, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(element, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height = 0, width = 0, left = 0, top = 0 } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // ✅ Vérifie si `children` est un élément HTML avant d'ajouter `ref`
  if (React.isValidElement(children) && typeof children.type === "string") {
    return React.cloneElement(children, { ref: magnetic } as any);
  }

  return children;
};

export default Index;
