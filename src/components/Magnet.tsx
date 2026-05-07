import { type ReactNode, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

type MagnetProps = {
  children: ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
};

export function Magnet({
  children,
  className = '',
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0, active: false });
  const shouldReduceMotion = Boolean(useReducedMotion());

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') {
        return;
      }

      const element = ref.current;

      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const isInsideMagnetArea =
        event.clientX >= rect.left - padding &&
        event.clientX <= rect.right + padding &&
        event.clientY >= rect.top - padding &&
        event.clientY <= rect.bottom + padding;

      if (!isInsideMagnetArea) {
        setPosition((current) =>
          current.active ? { x: 0, y: 0, active: false } : current,
        );
        return;
      }

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      setPosition({
        x: (event.clientX - centerX) / strength,
        y: (event.clientY - centerY) / strength,
        active: true,
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [padding, shouldReduceMotion, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: shouldReduceMotion
          ? 'none'
          : `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: shouldReduceMotion
          ? 'none'
          : position.active
            ? activeTransition
            : inactiveTransition,
        willChange: shouldReduceMotion ? 'auto' : 'transform',
      }}
    >
      {children}
    </div>
  );
}
