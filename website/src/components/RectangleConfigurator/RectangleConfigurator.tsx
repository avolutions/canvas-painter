import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styles from '../../css/Configurator.module.css';
import { Rectangle } from '@avolutions/canvas-painter';
import CursorDropdown from '../CursorDropdown/CursorDropdown';

interface RectangleConfiguratorProps {
  rectangle: Rectangle;
  onRectangleChange: (field: string, value: any) => void;
}

const RectangleConfigurator: React.FC<RectangleConfiguratorProps> = ({ rectangle, onRectangleChange }) => {
  const [isRectangleCollapsed, setIsRectangleCollapsed] = useState(true);
  const [isRectangleStyleCollapsed, setIsRectangleStyleCollapsed] = useState(true);
  const [isRectangleOptionsCollapsed, setIsRectangleOptionsCollapsed] = useState(true);

  return (
    <>
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
                onChange={(e) => onRectangleChange('position.x', Number(e.target.value))}
              />
            </div>
            <div className={styles.formRow}>
              <label>position.y</label>
              <input
                type="number"
                value={rectangle.position.y}
                onChange={(e) => onRectangleChange('position.y', Number(e.target.value))}
              />
            </div>
            <div className={styles.formRow}>
              <label>width</label>
              <input
                type="number"
                value={rectangle.width}
                onChange={(e) => onRectangleChange('width', Number(e.target.value))}
              />
            </div>
            <div className={styles.formRow}>
              <label>height</label>
              <input
                type="number"
                value={rectangle.height}
                onChange={(e) => onRectangleChange('height', Number(e.target.value))}
              />
            </div>
            <div className={styles.formRow}>
              <label>rotation</label>
              <input
                type="range"
                min="0"
                max="360"
                value={rectangle.rotation}
                onChange={(e) => onRectangleChange('rotation', Number(e.target.value))}
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
                    <label>borderColor</label>
                    <input
                      type="color"
                      value={rectangle.style.borderColor}
                      onChange={(e) => onRectangleChange('style.borderColor', e.target.value)}
                    />
                  </div>
                  <div className={styles.formRow}>
                    <label>borderWidth</label>
                    <input
                      type="number"
                      value={rectangle.style.borderWidth}
                      min="0"
                      onChange={(e) => onRectangleChange('style.borderWidth', Number(e.target.value))}
                    />
                  </div>
                  <div className={styles.formRow}>
                    <label>color</label>
                    <input
                      type="color"
                      value={rectangle.style.color}
                      onChange={(e) => onRectangleChange('style.color', e.target.value)}
                    />
                  </div>
                  <div className={styles.formRow}>
                    <label>cursor</label>
                    <CursorDropdown
                      value={rectangle.style.cursor}
                      onChange={(e) => onRectangleChange('style.cursor', e )}
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
                      onChange={(e) => onRectangleChange('options.centered', e.target.checked)}
                    />
                  </div>
                  <div className={styles.formRow}>
                    <label>visible</label>
                    <input
                      type="checkbox"
                      checked={rectangle.options.visible}
                      onChange={(e) => onRectangleChange('options.visible', e.target.checked)}
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
};

export default RectangleConfigurator;