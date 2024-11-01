import React from 'react';
import { Cursor } from '@avolutions/canvas-painter';

interface CursorDropdownProps {
  value: Cursor;
  onChange: (newCursor: Cursor) => void;
}

const CursorDropdown: React.FC<CursorDropdownProps> = ({ value, onChange }) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as Cursor);
  };

  return (
    <select value={value} onChange={handleSelectChange}>
      {Object.values(Cursor).map((cursorOption) => (
        <option key={cursorOption as string} value={cursorOption as string}>
          {cursorOption as string}
        </option>
      ))}
    </select>
  );
};

export default CursorDropdown;
