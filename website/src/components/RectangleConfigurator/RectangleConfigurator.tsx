import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styles from '../../css/Configurator.module.css';
import { Rectangle, ShapeState } from '@avolutions/canvas-painter';
import CursorDropdown from '../CursorDropdown/CursorDropdown';

interface RectangleConfiguratorProps {
  rectangle: Rectangle;
  onRectangleChange: (field: string, value: any) => void;
}

const RectangleConfigurator: React.FC<RectangleConfiguratorProps> = ({ rectangle, onRectangleChange }) => {
  const [isRectangleCollapsed, setIsRectangleCollapsed] = useState(true);
  const [isRectangleStyleCollapsed, setIsRectangleStyleCollapsed] = useState(true);
  const [isRectangleOptionsCollapsed, setIsRectangleOptionsCollapsed] = useState(true);
  const [selectedState, setSelectedState] = useState(ShapeState.Default);

  const getStyleValue = (property) => {
    return selectedState === ShapeState.Default
      ? rectangle.style[property]
      : rectangle.style[selectedState]?.[property] || '';
  };

  const handleStyleChange = (property, value) => {
    const path = selectedState === ShapeState.Default
      ? `style.${property}`
      : `style.${selectedState}.${property}`;
    onRectangleChange(path, value);
  };

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
                    <label>Select State</label>
                    <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
                      <option value={ShapeState.Default}>{ShapeState.Default}</option>
                      <option value={ShapeState.Hover}>{ShapeState.Hover}</option>
                    </select>
                  </div>

                  <div className={styles.formRow}>
                    <label>borderColor</label>
                    <input
                      type="color"
                      value={getStyleValue('borderColor')}
                      onChange={(e) => handleStyleChange('borderColor', e.target.value)}
                    />
                  </div>
                  <div className={styles.formRow}>
                    <label>borderWidth</label>
                    <input
                      type="number"
                      value={getStyleValue('borderWidth')}
                      min="0"
                      onChange={(e) => handleStyleChange('borderWidth', Number(e.target.value))}
                    />
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
                    <label>draggable</label>
                    <input
                      type="checkbox"
                      checked={rectangle.options.draggable}
                      onChange={(e) => onRectangleChange('options.draggable', e.target.checked)}
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