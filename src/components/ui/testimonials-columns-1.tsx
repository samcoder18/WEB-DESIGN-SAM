"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export function TestimonialsColumn(props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={props.className}>
      <motion.div
        animate={shouldReduceMotion ? undefined : { translateY: "-50%" }}
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: props.duration || 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }
        }
        className="flex flex-col gap-6 pb-6"
      >
        {new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }) => (
              <article
                key={`${name}-${index}`}
                className={cn(
                  "max-w-xs w-full rounded-[2rem] border border-white/8 bg-transparent p-8 text-frost",
                  "transition-colors duration-300 hover:border-white/14",
                )}
              >
                <p className="text-sm leading-6 text-frost/78">{text}</p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    width={48}
                    height={48}
                    src={image}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium leading-5 tracking-tight text-white">{name}</div>
                    <div className="leading-5 tracking-tight text-frost/55">{role}</div>
                  </div>
                </div>
              </article>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
