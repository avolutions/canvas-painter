import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styles from '../../css/Configurator.module.css';
import { ShapeState, Square } from '@avolutions/canvas-painter';
import CursorDropdown from '../CursorDropdown/CursorDropdown';

interface SquareConfiguratorProps {
  square: Square;
  onSquareChange: (field: string, value: any) => void;
}

const SquareConfigurator: React.FC<SquareConfiguratorProps> = ({ square, onSquareChange }) => {
  const [isSquareCollapsed, setIsSquareCollapsed] = useState(true);
  const [isSquareStyleCollapsed, setIsSquareStyleCollapsed] = useState(true);
  const [isSquareOptionsCollapsed, setIsSquareOptionsCollapsed] = useState(true);

  const [selectedState, setSelectedState] = useState(ShapeState.Default);

  const getStyleValue = (property) => {
    return selectedState === ShapeState.Default
      ? square.style[property]
      : square.style[selectedState]?.[property] || '';
  };

  const handleStyleChange = (property, value) => {
    const path = selectedState === ShapeState.Default
      ? `style.${property}`
      : `style.${selectedState}.${property}`;
      onSquareChange(path, value);
  };

  return (
    <>
      <div className={styles.collapsibleSection}>
        <button
          onClick={() => setIsSquareCollapsed((prev) => !prev)}
          className={`${styles.collapsibleHeader} ${styles.h3Header}`}
        >
          Square
          {isSquareCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        </button>
        {!isSquareCollapsed && (
          <>
            <div className={styles.formRow}>
              <label>position.x</label>
              <input
                type="number"
                value={square.position.x}
                onChange={(e) => onSquareChange('position.x', Number(e.target.value))}
              />
            </div>
            <div className={styles.formRow}>
              <label>position.y</label>
              <input
                type="number"
                value={square.position.y}
                onChange={(e) => onSquareChange('position.y', Number(e.target.value))}
              />
            </div>
            <div className={styles.formRow}>
              <label>size</label>
              <input
                type="number"
                value={square.size}
                onChange={(e) => onSquareChange('size', Number(e.target.value))}
              />
            </div>
            <div className={styles.formRow}>
              <label>rotation</label>
              <input
                type="range"
                min="0"
                max="360"
                value={square.rotation}
                onChange={(e) => onSquareChange('rotation', Number(e.target.value))}
              />
              <span>{square.rotation}°</span>
            </div>

            <div className={styles.collapsibleSection}>
              <button
                onClick={() => setIsSquareStyleCollapsed((prev) => !prev)}
                className={`${styles.collapsibleHeader} ${styles.h4Header}`}
              >
                Style
                {isSquareStyleCollapsed ? <FiChevronDown /> : <FiChevronUp />}
              </button>
              {!isSquareStyleCollapsed && (
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
                onClick={() => setIsSquareOptionsCollapsed((prev) => !prev)}
                className={`${styles.collapsibleHeader} ${styles.h4Header}`}
              >
                Options
                {isSquareOptionsCollapsed ? <FiChevronDown /> : <FiChevronUp />}
              </button>
              {!isSquareOptionsCollapsed && (
                <>
                  <div className={styles.formRow}>
                    <label>centered</label>
                    <input
                      type="checkbox"
                      checked={square.options.centered}
                      onChange={(e) => onSquareChange('options.centered', e.target.checked)}
                    />
                  </div>
                  <div className={styles.formRow}>
                    <label>draggable</label>
                    <input
                      type="checkbox"
                      checked={square.options.draggable}
                      onChange={(e) => onSquareChange('options.draggable', e.target.checked)}
                    />
                  </div>
                  <div className={styles.formRow}>
                    <label>visible</label>
                    <input
                      type="checkbox"
                      checked={square.options.visible}
                      onChange={(e) => onSquareChange('options.visible', e.target.checked)}
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

export default SquareConfigurator;