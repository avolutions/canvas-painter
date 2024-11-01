import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styles from '../../css/Configurator.module.css';
import { Circle } from '@avolutions/canvas-painter';

interface CircleConfiguratorProps {
  circle: Circle;
  onCircleChange: (field: string, value: any) => void;
}

const CircleConfigurator: React.FC<CircleConfiguratorProps> = ({ circle, onCircleChange }) => {
  const [isCircleCollapsed, setIsCircleCollapsed] = useState(true);
  const [isCircleStyleCollapsed, setIsCircleStyleCollapsed] = useState(true);
  const [isCircleOptionsCollapsed, setIsCircleOptionsCollapsed] = useState(true);

  return (
    <>
      <div className={styles.collapsibleSection}>
        <button
          onClick={() => setIsCircleCollapsed((prev) => !prev)}
          className={`${styles.collapsibleHeader} ${styles.h3Header}`}
        >
          Circle
          {isCircleCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        </button>
        {!isCircleCollapsed && (
          <>
            <div className={styles.formRow}>
              <label>center.x</label>
              <input
                type="number"
                value={circle.center.x}
                onChange={(e) => onCircleChange('center.x', Number(e.target.value))}
              />
            </div>
            <div className={styles.formRow}>
              <label>center.y</label>
              <input
                type="number"
                value={circle.center.y}
                onChange={(e) => onCircleChange('center.y', Number(e.target.value))}
              />
            </div>
            <div className={styles.formRow}>
              <label>radius</label>
              <input
                type="number"
                value={circle.radius}
                onChange={(e) => onCircleChange('radius', Number(e.target.value))}
              />
            </div>

            <div className={styles.collapsibleSection}>
              <button
                onClick={() => setIsCircleStyleCollapsed((prev) => !prev)}
                className={`${styles.collapsibleHeader} ${styles.h4Header}`}
              >
                Style
                {isCircleStyleCollapsed ? <FiChevronDown /> : <FiChevronUp />}
              </button>
              {!isCircleStyleCollapsed && (
                <>
                  <div className={styles.formRow}>
                    <label>color</label>
                    <input
                      type="color"
                      value={circle.style.color}
                      onChange={(e) => onCircleChange('style.color', e.target.value)}
                    />
                  </div>
                  <div className={styles.formRow}>
                    <label>border.color</label>
                    <input
                      type="color"
                      value={circle.style.border.color}
                      onChange={(e) => onCircleChange('style.border.color', e.target.value)}
                    />
                  </div>
                  <div className={styles.formRow}>
                    <label>border.width</label>
                    <input
                      type="number"
                      value={circle.style.border.width}
                      min="0"
                      onChange={(e) => onCircleChange('style.border.width', Number(e.target.value))}
                    />
                  </div>
                </>
              )}
            </div>
            <div className={styles.collapsibleSection}>
              <button
                onClick={() => setIsCircleOptionsCollapsed((prev) => !prev)}
                className={`${styles.collapsibleHeader} ${styles.h4Header}`}
              >
                Options
                {isCircleOptionsCollapsed ? <FiChevronDown /> : <FiChevronUp />}
              </button>
              {!isCircleOptionsCollapsed && (
                <>
                  <div className={styles.formRow}>
                    <label>visible</label>
                    <input
                      type="checkbox"
                      checked={circle.options.visible}
                      onChange={(e) => onCircleChange('options.visible', e.target.checked)}
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

export default CircleConfigurator;