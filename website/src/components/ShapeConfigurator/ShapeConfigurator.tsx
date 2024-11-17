import React, { useEffect, useState } from 'react';

import { Canvas, Circle, CircleStyle, Line, LineStyle, Rectangle, RectangleStyle, Shape, Square } from '@avolutions/canvas-painter';
import RectangleConfigurator from '../RectangleConfigurator/RectangleConfigurator';
import SquareConfigurator from '../SquareConfigurator/SquareConfigurator';
import CircleConfigurator from '../CircleConfigurator/CircleConfigurator';
import LineConfigurator from '../LineConfigurator/LineConfigurator';

interface ShapeConfiguratorProps {
  canvas: Canvas
}

const ShapeConfigurator: React.FC<ShapeConfiguratorProps> = ({ canvas }) => {
  const [, setRenderTrigger] = useState(0); // Dummy state variable for forcing re-renders

  const [shapes, setShapes] = useState<Shape[]>([]);
  const [rectangle, setRectangle] = useState<Rectangle>(new Rectangle(0, 0, 0, 0, 0, { hover: {}, active: {} }, {}));
  const [square, setSquare] = useState<Square>(new Square(0, 0, 0, 0, { hover: {}, active: {} }, {}));
  const [circle, setCircle] = useState<Circle>(new Circle(0, 0, 0, { hover: {}, active: {} }, {}));
  const [line, setLine] = useState<Line>(new Line(0, 0, 0, 0, { hover: {}, active: {} }, {}));

  useEffect(() => {
    setShapes((prevShapes) => [...prevShapes, rectangle, square, circle, line]);
  }, []);

  useEffect(() => {
    shapes.forEach((shape) => canvas.watch(shape));
  }, [canvas, shapes]);

  const handleShapeChange = (shape: Shape, field: string, value: any) => {
    let target = shape;
    const path = field.split('.');
    console.log(path);

    for (let i = 0; i < path.length - 1; i++) {
      target = target[path[i]];
    }
    target[path[path.length - 1]] = value;

    // Trigger React to re-render
    setRenderTrigger((prev) => prev + 1); // Force a re-render
    console.log(shape.style.active);
  };

  return (
    <>
      <h2>Shapes</h2>
      <RectangleConfigurator
        rectangle={rectangle}
        onRectangleChange={(field, value) => handleShapeChange(rectangle, field, value)}
      />
      <SquareConfigurator
        square={square}
        onSquareChange={(field, value) => handleShapeChange(square, field, value)}
      />
      <CircleConfigurator
        circle={circle}
        onCircleChange={(field, value) => handleShapeChange(circle, field, value)}
      />
      <LineConfigurator
        line={line}
        onLineChange={(field, value) => handleShapeChange(line, field, value)}
      />
    </>
  );
}

export default ShapeConfigurator;