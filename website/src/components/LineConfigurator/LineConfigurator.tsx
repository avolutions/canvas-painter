import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styles from '../../css/Configurator.module.css';
import { Line, ShapeState } from '@avolutions/canvas-painter';
import CursorDropdown from '../CursorDropdown/CursorDropdown';

interface LineConfiguratorProps {
  line: Line;
  onLineChange: (field: string, value: any) => void;
}

const LineConfigurator: React.FC<LineConfiguratorProps> = ({ line, onLineChange }) => {
  const [isLineCollapsed, setIsLineCollapsed] = useState(true);
  const [isLineStyleCollapsed, setIsLineStyleCollapsed] = useState(true);
  const [isLineOptionsCollapsed, setIsLineOptionsCollapsed] = useState(true);
  const [selectedState, setSelectedState] = useState(ShapeState.Default);

  const getStyleValue = (property) => {
    return selectedState === ShapeState.Default
      ? line.style[property]
      : line.style[selectedState]?.[property] || '';
  };

  const handleStyleChange = (property, value) => {
    const path = selectedState === ShapeState.Default
      ? `style.${property}`
      : `style.${selectedState}.${property}`;
    onLineChange(path, value);
  };

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
                    <label>Select State</label>
                    <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
                      <option value={ShapeState.Default}>{ShapeState.Default}</option>
                      <option value={ShapeState.Hover}>{ShapeState.Hover}</option>
                      <option value={ShapeState.Active}>{ShapeState.Active}</option>
                    </select>
                  </div>

                  <div className={styles.formRow}>
                    <label>color</label>
                    <input
                      type="color"
                      value={getStyleValue('color')}
                      onChange={(e) => handleStyleChange('color', e.target.value)}
                    />
                  </div>
                  <div className={styles.formRow}>
                    <label>width</label>
                    <input
                      type="number"
                      value={getStyleValue('width')}
                      min="0"
                      onChange={(e) => handleStyleChange('width', Number(e.target.value))}
                    />
                  </div>
                  <div className={styles.formRow}>
                    <label>cursor</label>
                    <CursorDropdown
                      value={getStyleValue('cursor')}
                      onChange={(e) => handleStyleChange('cursor', e )}
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
                    <label>draggable</label>
                    <input
                      type="checkbox"
                      checked={line.options.draggable}
                      onChange={(e) => onLineChange('options.draggable', e.target.checked)}
                    />
                  </div>
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