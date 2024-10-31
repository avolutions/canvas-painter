// src/components/Canvas/Canvas.tsx
import React, { useEffect, useRef } from 'react';
import styles from './CanvasDisplay.module.css';

import { Canvas, CanvasOptions, CanvasStyle } from '@avolutions/canvas-painter';

interface CanvasDisplayProps {
  options: CanvasOptions,
  style: CanvasStyle
}

const CanvasDisplay: React.FC<CanvasDisplayProps> = ({ options, style }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      // Call Canvas.init with the canvas ID and configuration options
      Canvas.init('demoCanvas', options, style);
    }
  }, [options, style]); // Dependencies: re-run when options or style changes

  return <canvas id="demoCanvas" ref={canvasRef} className={styles.canvas} />;
};

export default CanvasDisplay;
