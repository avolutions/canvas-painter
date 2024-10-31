import React, { useState } from 'react';
import Layout from '@theme/Layout';
import CanvasConfigurator from '../components/CanvasConfigurator/CanvasConfigurator';
import styles from './demo.module.css';

import { CanvasOptions, CanvasStyle } from '../../node_modules/@avolutions/canvas-painter/dist/esm/index.js';
import CanvasDisplay from '../components/CanvasDisplay/CanvasDisplay';
import ShapeConfigurator from '../components/ShapeConfigurator/ShapeConfigurator';

export default function Demo(): JSX.Element {
  const [options, setOptions] = useState<CanvasOptions>(CanvasOptions.DefaultOptions);
  const [style, setStyle] = useState<CanvasStyle>(CanvasStyle.DefaultStyle);

  return (
    <Layout>
      <div className={styles.demoLayout}>
        <aside className={styles.sidebar}>
          <CanvasConfigurator
            setOptions={setOptions}
            setStyle={setStyle} />
        </aside>

        <main className={styles.content}>
          <CanvasDisplay
            options={options}
            style={style} />
        </main>

        <aside className={styles.sidebar}>
          <ShapeConfigurator />
        </aside>
      </div>
    </Layout>
  );
};
