import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import CanvasConfigurator from '../components/CanvasConfigurator/CanvasConfigurator';
import ShapeConfigurator from '../components/ShapeConfigurator/ShapeConfigurator';
import styles from './demo.module.css';

import { Canvas, CanvasOptions, CanvasStyle } from '@avolutions/canvas-painter';

export default function Demo(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [canvasInstance, setCanvasInstance] = useState<Canvas | null>(null);

  const [options, setOptions] = useState<CanvasOptions>(CanvasOptions.DefaultOptions);
  const [style, setStyle] = useState<CanvasStyle>(CanvasStyle.DefaultStyle);

  useEffect(() => {
    if (canvasRef.current) {
      // Initialize the Canvas instance whenever options or style changes
      const canvas = Canvas.init('demoCanvas', options, style);
      setCanvasInstance(canvas);
    }
  }, [options, style]);

  return (
    <Layout>
      <div className={styles.demoLayout}>
        <aside className={styles.sidebar}>
          <CanvasConfigurator
            setOptions={setOptions}
            setStyle={setStyle} />
        </aside>

        <main className={styles.content}>
          <canvas id="demoCanvas" ref={canvasRef} className={styles.canvas} />
        </main>

        <aside className={styles.sidebar}>
          <ShapeConfigurator canvas={canvasInstance} />
        </aside>
      </div>
    </Layout>
  );
};
