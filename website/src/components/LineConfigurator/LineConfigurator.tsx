import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styles from '../../css/Configurator.module.css';
import { Line } from '@avolutions/canvas-painter';

interface LineConfiguratorProps {
  line: Line;
  onLineChange: (field: string, value: any) => void;
}

const LineConfigurator: React.FC<LineConfiguratorProps> = ({ line, onLineChange }) => {
  const [isLineCollapsed, setIsLineCollapsed] = useState(true);
  const [isLineStyleCollapsed, setIsLineStyleCollapsed] = useState(true);
  const [isLineOptionsCollapsed, setIsLineOptionsCollapsed] = useState(true);

  return (
    <>
      <div className={styles.collapsibleSection}>
        <button
          onClick={() => setIsLineCollapsed((prev) => !prev)}
          className={`${styles.collapsibleHeader} ${styles.h3Header}`}
        >
          Line
          {isLineCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        </button>
        {!isLineCollapsed && (
          <>
            <div className={styles.formRow}>
              <label>start.x</label>
              <input
                type="number"
                value={line.start.x}
                onChange={(e) => onLineChange('start.x', Number(e.target.value))}
              />
            </div>
            <div className={styles.formRow}>
              <label>start.y</label>
              <input
                type="number"
                value={line.start.y}
                onChange={(e) => onLineChange('start.y', Number(e.target.value))}
              />
            </div>
            <div className={styles.formRow}>
              <label>end.x</label>
              <input
                type="number"
                value={line.end.x}
                onChange={(e) => onLineChange('end.x', Number(e.target.value))}
              />
            </div>
            <div className={styles.formRow}>
              <label>end.y</label>
              <input
                type="number"
                value={line.end.y}
                onChange={(e) => onLineChange('end.y', Number(e.target.value))}
              />
            </div>

            <div className={styles.collapsibleSection}>
              <button
                onClick={() => setIsLineStyleCollapsed((prev) => !prev)}
                className={`${styles.collapsibleHeader} ${styles.h4Header}`}
              >
                Style
                {isLineStyleCollapsed ? <FiChevronDown /> : <FiChevronUp />}
              </button>
              {!isLineStyleCollapsed && (
                <>
                  <div className={styles.formRow}>
                    <label>color</label>
                    <input
                      type="color"
                      value={line.style.color}
                      onChange={(e) => onLineChange('style.color', e.target.value)}
                    />
                  </div>
                  <div className={styles.formRow}>
                    <label>width</label>
                    <input
                      type="number"
                      value={line.style.width}
                      min="0"
                      onChange={(e) => onLineChange('style.width', Number(e.target.value))}
                    />
                  </div>
                </>
              )}
            </div>
            <div className={styles.collapsibleSection}>
              <button
                onClick={() => setIsLineOptionsCollapsed((prev) => !prev)}
                className={`${styles.collapsibleHeader} ${styles.h4Header}`}
              >
                Options
                {isLineOptionsCollapsed ? <FiChevronDown /> : <FiChevronUp />}
              </button>
              {!isLineOptionsCollapsed && (
                <>
                  <div className={styles.formRow}>
                    <label>visible</label>
                    <input
                      type="checkbox"
                      checked={line.options.visible}
                      onChange={(e) => onLineChange('options.visible', e.target.checked)}
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

export default LineConfigurator;