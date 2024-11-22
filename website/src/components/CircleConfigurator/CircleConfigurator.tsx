import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styles from '../../css/Configurator.module.css';
import { Circle, ShapeState } from '@avolutions/canvas-painter';
import CursorDropdown from '../CursorDropdown/CursorDropdown';

interface CircleConfiguratorProps {
  circle: Circle;
  onCircleChange: (field: string, value: any) => void;
}

const CircleConfigurator: React.FC<CircleConfiguratorProps> = ({ circle, onCircleChange }) => {
  const [isCircleCollapsed, setIsCircleCollapsed] = useState(true);
  const [isCircleStyleCollapsed, setIsCircleStyleCollapsed] = useState(true);
  const [isCircleOptionsCollapsed, setIsCircleOptionsCollapsed] = useState(true);

  const [selectedState, setSelectedState] = useState(ShapeState.Default);

  const getStyleValue = (property) => {
    return selectedState === ShapeState.Default
      ? circle.style[property]
      : circle.style[selectedState]?.[property] || '';
  };

  const handleStyleChange = (property, value) => {
    const path = selectedState === ShapeState.Default
      ? `style.${property}`
      : `style.${selectedState}.${property}`;
    onCircleChange(path, value);
  };

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
                    <label>Select State</label>
                    <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
                      <option value={ShapeState.Default}>{ShapeState.Default}</option>
                      <option value={ShapeState.Hover}>{ShapeState.Hover}</option>
                      <option value={ShapeState.Active}>{ShapeState.Active}</option>
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
                onClick={() => setIsCircleOptionsCollapsed((prev) => !prev)}
                className={`${styles.collapsibleHeader} ${styles.h4Header}`}
              >
                Options
                {isCircleOptionsCollapsed ? <FiChevronDown /> : <FiChevronUp />}
              </button>
              {!isCircleOptionsCollapsed && (
                <>
                  <div className={styles.formRow}>
                    <label>draggable</label>
                    <input
                      type="checkbox"
                      checked={circle.options.draggable}
                      onChange={(e) => onCircleChange('options.draggable', e.target.checked)}
                    />
                  </div>
                  <div className={styles.formRow}>
                    <label>selectable</label>
                    <input
                      type="checkbox"
                      checked={circle.options.selectable}
                      onChange={(e) => onCircleChange('options.selectable', e.target.checked)}
                    />
                  </div>
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