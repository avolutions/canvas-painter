import React, { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import CodeBlock from '@theme/CodeBlock';
import styles from '../../css/Configurator.module.css';

import { Canvas, CanvasOptions, CanvasStyle } from '@avolutions/canvas-painter';
import CursorDropdown from '../CursorDropdown/CursorDropdown';

// Format JSON-like output function
const formatAsJavaScriptObject = (
  obj: Record<string, any>,
  defaultValues: Record<string, any>
): string => {
  const filteredObj = obj;
  /*const filteredObj = Object.keys(obj).reduce((acc, key) => {
    if (obj[key] !== defaultValues[key]) {
      acc[key] = obj[key];
    }
    return acc;
  }, {} as Record<string, any>);*/

  return JSON.stringify(filteredObj, null, 2).replace(/"([^"]+)":/g, '$1:');
};

interface CanvasConfiguratorProps {
  canvas: Canvas,
  setOptions: React.Dispatch<React.SetStateAction<CanvasOptions>>;
  setStyle: React.Dispatch<React.SetStateAction<CanvasStyle>>;
}

const CanvasConfigurator: React.FC<CanvasConfiguratorProps> = ({ canvas, setOptions, setStyle }) => {
  const [options, updateOptions] = useState<CanvasOptions>(CanvasOptions.DefaultOptions);
  const [style, updateStyle] = useState<CanvasStyle>(CanvasStyle.DefaultStyle);

  const [optionsJson, setOptionsJson] = useState<string>(formatAsJavaScriptObject(options, CanvasOptions.DefaultOptions));
  const [styleJson, setStyleJson] = useState<string>(formatAsJavaScriptObject(style, CanvasStyle.DefaultStyle));

  const [isOptionsSectionCollapsed, setIsOptionsSectionCollapsed] = useState(false);
  const [isOptionsJsonCollapsed, setIsOptionsJsonCollapsed] = useState(true);

  const [isStyleSectionCollapsed, setIsStyleSectionCollapsed] = useState(false);
  const [isStyleJsonCollapsed, setIsStyleJsonCollapsed] = useState(true);

  const [isActionsSectionCollapsed, setIsActionsSectionCollapsed] = useState(false);

  useEffect(() => {
    updateOptions((prevOptions) => ({
      ...prevOptions,
      width: canvas._options.width,
      height: canvas._options.height,
    }));
  }, []);

  useEffect(() => {
    setOptions(options);
  }, [options, setOptions]);

  useEffect(() => {
    setStyle(style);
  }, [style, setStyle]);

  // Update JSON strings when options or style states change
  useEffect(() => {
    setOptionsJson(formatAsJavaScriptObject(options, CanvasOptions.DefaultOptions));
  }, [options]);

  useEffect(() => {
    setStyleJson(formatAsJavaScriptObject(style, CanvasStyle.DefaultStyle));
  }, [style]);

  // Handlers to update options and style states
  const handleOptionsChange = (field: keyof CanvasOptions, value: any) => {
    updateOptions((prevOptions) => ({
      ...prevOptions,
      [field]: value,
    }));
  };

  const handleMouseButtonsChange = (button: number, checked: boolean) => {
    const newMouseButtons = checked
      ? [...options.pan.mouseButtons, button] // Add button to array
      : options.pan.mouseButtons.filter((b) => b !== button); // Remove button from array
    handleOptionsChange('pan', { ...options.pan, mouseButtons: newMouseButtons });
  };

  const handleStyleChange = (field: keyof CanvasStyle, value: string) => {
    updateStyle((prevStyle) => ({
      ...prevStyle,
      [field]: value,
    }));
  };

  const handleResetZoom = () => {
    canvas.resetZoom();
  };

  const handleResetPan = () => {
    canvas.resetPan();
  };

  const handleResetZoomPan = () => {
    canvas.resetZoomPan();
  };

  return (
    <>
      <h2>Setup Canvas</h2>
      <div className={styles.collapsibleSection}>
        <button
          onClick={() => setIsOptionsSectionCollapsed((prev) => !prev)}
          className={`${styles.collapsibleHeader} ${styles.h3Header}`}
        >
          Options
          {isOptionsSectionCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        </button>
        {!isOptionsSectionCollapsed && (
          <>
            <div className={styles.formRow}>
              <label>width</label>
              <input
                type="number"
                value={options.width}
                onChange={(e) => handleOptionsChange('width', Number(e.target.value))}
              />
            </div>
            <div className={styles.formRow}>
              <label>height</label>
              <input
                type="number"
                value={options.height}
                onChange={(e) => handleOptionsChange('height', Number(e.target.value))}
              />
            </div>
            <div className={styles.formRow}>
              <label>zoomable</label>
              <input
                type="checkbox"
                checked={options.zoomable}
                onChange={(e) => handleOptionsChange('zoomable', e.target.checked)}
              />
            </div>
            {options.zoomable && (
              <>
                <div className={styles.formRow}>
                  <label>zoom.step</label>
                  <input
                    type="number"
                    step="0.1"
                    value={options.zoom.step}
                    onChange={(e) => handleOptionsChange('zoom', { ...options.zoom, step: Number(e.target.value) })}
                  />
                </div>
                <div className={styles.formRow}>
                  <label>zoom.useWheel</label>
                  <input
                    type="checkbox"
                    checked={options.zoom.useWheel}
                    onChange={(e) => handleOptionsChange('zoom', { ...options.zoom, useWheel: e.target.checked })}
                  />
                </div>
              </>
            )}
            <div className={styles.formRow}>
              <label>pannable</label>
              <input
                type="checkbox"
                checked={options.pannable}
                onChange={(e) => handleOptionsChange('pannable', e.target.checked)}
              />
            </div>
            {options.pannable && (
              <>
                <div className={styles.formRow}>
                  <label>pan.useMouse</label>
                  <input
                    type="checkbox"
                    checked={options.pan.useMouse}
                    onChange={(e) => handleOptionsChange('pan', { ...options.pan, useMouse: e.target.checked })}
                  />
                </div>
                <div className={styles.formRow}>
                  <label className={styles.top}>
                    pan.mouseButtons
                  </label>
                  <div className={styles.checkboxGroup}>
                    <div>
                      <input
                        type="checkbox"
                        checked={options.pan.mouseButtons.includes(0)}
                        onChange={(e) => handleMouseButtonsChange(0, e.target.checked)}
                      />
                      <label>Left</label>
                    </div>
                    <div>
                      <input
                          type="checkbox"
                          checked={options.pan.mouseButtons.includes(1)}
                          onChange={(e) => handleMouseButtonsChange(1, e.target.checked)}
                        />
                      <label>Middle</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        checked={options.pan.mouseButtons.includes(2)}
                        onChange={(e) => handleMouseButtonsChange(2, e.target.checked)}
                      />
                      <label>Right</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        checked={options.pan.mouseButtons.includes(3)}
                        onChange={(e) => handleMouseButtonsChange(3, e.target.checked)}
                      />
                      <label>Back</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        checked={options.pan.mouseButtons.includes(4)}
                        onChange={(e) => handleMouseButtonsChange(4, e.target.checked)}
                      />
                      <label>Forward</label>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className={styles.collapsibleSection}>
              <button
                onClick={() => setIsOptionsJsonCollapsed((prev) => !prev)}
                className={`${styles.collapsibleHeader} ${styles.h4Header}`}
              >
                Options JSON
                {isOptionsJsonCollapsed ? <FiChevronDown /> : <FiChevronUp />}
              </button>
              {!isOptionsJsonCollapsed && <CodeBlock language="json">{optionsJson}</CodeBlock>}
            </div>
          </>
        )}
      </div>

      <hr />

      <div className={styles.collapsibleSection}>
        <button
          onClick={() => setIsStyleSectionCollapsed((prev) => !prev)}
          className={`${styles.collapsibleHeader} ${styles.h3Header}`}
        >
          Style
          {isStyleSectionCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        </button>
        {!isStyleSectionCollapsed && (
          <>
            <div className={styles.formRow}>
              <label>cursor.default</label>
              <CursorDropdown
                value={style.cursor.default}
                onChange={(newCursor) => handleStyleChange('cursor', { ...style.cursor, default: newCursor })}
              />
            </div>
            <div className={styles.formRow}>
              <label>cursor.panActive</label>
              <CursorDropdown
                value={style.cursor.panActive}
                onChange={(newCursor) => handleStyleChange('cursor', { ...style.cursor, panActive: newCursor })}
              />
            </div>

            <div className={styles.collapsibleSection}>
              <button
                onClick={() => setIsStyleJsonCollapsed((prev) => !prev)}
                className={`${styles.collapsibleHeader} ${styles.h4Header}`}
              >
                Style JSON
                {isStyleJsonCollapsed ? <FiChevronDown /> : <FiChevronUp />}
              </button>
              {!isStyleJsonCollapsed && <CodeBlock language="json">{styleJson}</CodeBlock>}
            </div>
          </>
        )}
      </div>

      <hr />

      <div className={styles.collapsibleSection}>
        <button
          onClick={() => setIsActionsSectionCollapsed((prev) => !prev)}
          className={`${styles.collapsibleHeader} ${styles.h3Header}`}
        >
          Actions
          {isActionsSectionCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        </button>
        {!isActionsSectionCollapsed && (
          <>
            <div className={styles.buttons}>
              {options.zoomable &&
                <button
                  className={`${styles.button} button button--secondary`}
                  onClick={handleResetZoom}>Reset Zoom</button>
              }
              {options.pannable &&
                <button
                  className={`${styles.button} button button--secondary`}
                  onClick={handleResetPan}>Reset Pan</button>
              }
              {options.zoomable && options.pannable &&
                <button
                  className={`${styles.button} button button--secondary`}
                  onClick={handleResetZoomPan}>Reset Zoom & Pan</button>
              }
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CanvasConfigurator;
