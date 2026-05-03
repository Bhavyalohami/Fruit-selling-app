import React from 'react';
import { motion } from 'framer-motion';

export const MotionVine = () => (
  <svg className="motion-vine" viewBox="0 0 1200 180" role="img" aria-label="Animated orchard vine">
    <motion.path
      d="M-40 102 C 110 28, 225 170, 380 88 S 650 36, 790 96 S 1030 168, 1240 48"
      fill="none"
      stroke="#2f8f53"
      strokeWidth="8"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2.4, ease: 'easeInOut' }}
    />
    {[120, 292, 485, 675, 870, 1045].map((x, index) => (
      <motion.ellipse
        key={x}
        cx={x}
        cy={index % 2 ? 72 : 118}
        rx="28"
        ry="13"
        fill={index % 2 ? '#7ac943' : '#64b96a'}
        initial={{ scale: 0, rotate: -25 }}
        animate={{ scale: [0, 1.15, 1], rotate: index % 2 ? 18 : -18 }}
        transition={{ delay: 0.22 * index, duration: 0.7 }}
      />
    ))}
  </svg>
);

export const FloatingFruit = ({ className = '' }) => (
  <motion.svg
    className={`floating-fruit ${className}`}
    viewBox="0 0 160 180"
    aria-hidden="true"
    animate={{ y: [0, -18, 0], rotate: [-4, 5, -4] }}
    transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
  >
    <path d="M80 18c25-24 55-21 76-7-29 4-47 20-56 45 2-27-7-39-20-38Zm0 0C55-6 25-3 4 11c29 4 47 20 56 45-2-27 7-39 20-38Z" fill="#3fa85e" />
    <path d="M80 38c42 0 76 34 76 76 0 56-76 66-76 66S4 170 4 114c0-42 34-76 76-76Z" fill="#f5b73b" />
    <path d="M34 86h92M29 116h102M42 145h76" stroke="#9b6f1d" strokeWidth="9" strokeLinecap="round" opacity=".55" />
    <path d="M53 65l54 76M108 65l-55 76" stroke="#fff0a8" strokeWidth="5" strokeLinecap="round" opacity=".55" />
  </motion.svg>
);
