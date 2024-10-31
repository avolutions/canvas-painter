import React, { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styles from '../../css/Configurator.module.css';

import { Canvas, Rectangle, RectangleOptions, RectangleStyle, Shape } from '../../../node_modules/@avolutions/canvas-painter/dist/esm/index.js';

interface ShapeConfiguratorProps {
  canvas: Canvas
}

const ShapeConfigurator: React.FC<ShapeConfiguratorProps> = ({ canvas }) => {
  const [, setRenderTrigger] = useState(0); // Dummy state variable for forcing re-renders

  const [shapes, setShapes] = useState<Shape[]>([]);
  const [rectangle, setRectangle] = useState<Rectangle>(new Rectangle(125, 50, 50, 50));

  const [rectangleOptions, updateRectangleOptions] = useState<RectangleOptions>(RectangleOptions.DefaultOptions);
  const [rectangleStyle, updateRectangleStyle] = useState<RectangleStyle>(RectangleStyle.DefaultStyle);

  const [isRectangleCollapsed, setIsRectangleCollapsed] = useState(false);
  const [isRectangleStyleCollapsed, setIsRectangleStyleCollapsed] = useState(true);
  const [isRectangleOptionsCollapsed, setIsRectangleOptionsCollapsed] = useState(true);

  useEffect(() => {
    setShapes((prevShapes) => [...prevShapes, rectangle]);
  }, []);

  useEffect(() => {
    shapes.forEach((shape) => canvas.watch(shape));
  }, [canvas, shapes]);

  const handleRectangleChange = (field: string, value: any) => {
    let target = rectangle;
    const path = field.split('.');

    // Traverse the path to the last property
    for (let i = 0; i < path.length - 1; i++) {
      target = target[path[i]] as any;
    }

    // Update the target property
    const lastKey = path[path.length - 1];
    target[lastKey] = value;

    // Trigger React to re-render
    setRectangle(rectangle);
    setRenderTrigger((prev) => prev + 1); // Force a re-render
  };

  return (
    <>
      <h2>Shapes</h2>
      <div className={styles.collapsibleSection}>
        <button
          onClick={() => setIsRectangleCollapsed((prev) => !prev)}
          className={`${styles.collapsibleHeader} ${styles.h3Header}`}
        >
          Rectangle
          {isRectangleCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        </button>
        {!isRectangleCollapsed && (
          <>
            <div className={styles.formRow}>
              <label>position.x</label>
              <input
                type="number"
                value={rectangle.position.x}
                onChange={(e) => handleRectangleChange('position.x', Number(e.target.value))}
              />
            </div>
            <div className={styles.formRow}>
              <label>position.y</label>
              <input
                type="number"
                value={rectangle.position.y}
                onChange={(e) => handleRectangleChange('position.y', Number(e.target.value))}
              />
            </div>
            <div className={styles.formRow}>
              <label>width</label>
              <input
                type="number"
                value={rectangle.width}
                onChange={(e) => handleRectangleChange('width', Number(e.target.value))}
              />
            </div>
            <div className={styles.formRow}>
              <label>height</label>
              <input
                type="number"
                value={rectangle.height}
                onChange={(e) => handleRectangleChange('height', Number(e.target.value))}
              />
            </div>
            <div className={styles.formRow}>
              <label>Rotation</label>
              <input
                type="range"
                min="0"
                max="360"
                value={rectangle.rotation}
                onChange={(e) => handleRectangleChange('rotation', Number(e.target.value))}
              />
              <span>{rectangle.rotation}°</span>
            </div>

            <div className={styles.collapsibleSection}>
              <button
                onClick={() => setIsRectangleStyleCollapsed((prev) => !prev)}
                className={`${styles.collapsibleHeader} ${styles.h4Header}`}
              >
                Style
                {isRectangleStyleCollapsed ? <FiChevronDown /> : <FiChevronUp />}
              </button>
              {!isRectangleStyleCollapsed && (
                <>
                  <div className={styles.formRow}>
                    <label>color</label>
                    <input
                      type="color"
                      value={rectangle.style.color}
                      onChange={(e) => handleRectangleChange('style.color', e.target.value)}
                    />
                  </div>
                  <div className={styles.formRow}>
                    <label>border.color</label>
                    <input
                      type="color"
                      value={rectangle.style.border.color}
                      onChange={(e) => handleRectangleChange('style.border.color', e.target.value)}
                    />
                  </div>
                  <div className={styles.formRow}>
                    <label>border.width</label>
                    <input
                      type="number"
                      value={rectangle.style.border.width}
                      min="0"
                      onChange={(e) => handleRectangleChange('style.border.width', Number(e.target.value))}
                    />
                  </div>
                </>
              )}
            </div>
            <div className={styles.collapsibleSection}>
              <button
                onClick={() => setIsRectangleOptionsCollapsed((prev) => !prev)}
                className={`${styles.collapsibleHeader} ${styles.h4Header}`}
              >
                Options
                {isRectangleOptionsCollapsed ? <FiChevronDown /> : <FiChevronUp />}
              </button>
              {!isRectangleOptionsCollapsed && (
                <>
                  <div className={styles.formRow}>
                    <label>centered</label>
                    <input
                      type="checkbox"
                      checked={rectangle.options.centered}
                      onChange={(e) => handleRectangleChange('options.centered', e.target.checked)}
                    />
                  </div>
                  <div className={styles.formRow}>
                    <label>visible</label>
                    <input
                      type="checkbox"
                      checked={rectangle.options.visible}
                      onChange={(e) => handleRectangleChange('options.visible', e.target.checked)}
                    />
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ShapeConfigurator;