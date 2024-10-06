---
sidebar_position: 2
---

# Angle

The `Angle` class in **CanvasPainter.js** provides a flexible and powerful way to handle angular measurements when working with shapes, especially for tasks like rotation, transformation, and directional adjustments. Whether you're defining angles in degrees or radians, this class simplifies the process by offering built-in methods for conversion, normalization, and adjustments.

## Defining an angle

To create an `Angle`, you can pass the value in degrees to the constructor. If needed, you can also specify whether the angle should be normalized to a range of `[0, 360)`.

```js
import { Angle } from '@avolutions/canvas-painter';

// Define a 45-degree angle
const angle = new Angle(45);

// Define a -90-degree angle and normalize it
const normalizedAngle = new Angle(-90, true);
console.log(normalizedAngle.degrees); // Output: 270
```

### From radians

To create an `Angle` from Radians you can use the static `fromRadians()` method.

```js
// Define a 45-degree angle
const angle = Angle.fromRadians(1);

console.log(angle.degrees); // Output: 57.2958
```

## Working with degrees and radians

The `Angle` class allows you to seamlessly switch between degrees and radians. By default, angles are handled in degrees, but if you need to work in radians, the class automatically converts between the two.

```js
const angle = new Angle(180);

// Get the angle in degrees
console.log(angle.degrees); // Output: 180

// Get the angle in radians
console.log(angle.radians); // Output: 3.14159 (approximately pi)

// Set the angle in radians
angle.radians = Math.PI / 2;
console.log(angle.degrees); // Output: 90
```

The `Angle` class also provides static helper methods to convert between radians and degrees.

```js
// Convert degrees to radians
const radians = Angle.degreesToRadians(180);
console.log(angle.radians); // Output: 3.14159 (approximately pi)

// Convert radians to degrees
const degrees = Angle.degreesToRadians(Math.PI / 2);
console.log(angle.degrees); // Output: 90
```

## Normalizing angles

Normalization ensures that the angle stays within a standard range of `[0, 360)`. This is useful when working with rotations or ensuring that angles don't wrap around in unexpected ways.

```js
const angle = new Angle(450, true);
console.log(angle.degrees); // Output: 90 (450 degrees is normalized to 90 degrees)

const angle2 = new Angle(-30, true);
console.log(angle2.degrees); // Output: 330 (normalized from -30)
```

If you need to ensure that an angle stays within this range at any point, you can use the `normalize()` method.

```js
const angle = new Angle(720);
console.log(angle.degrees); // Output: 720

angle.normalize();
console.log(angle.degrees); // Output: 0 (720 degrees normalized to 0)
```

If you only need the normalized value without normalize the angle, you can use the `getNormalized()` method.

```js
const angle = new Angle(720);
console.log(angle.degrees); // Output: 720

console.log(angle.getNormalized()); // Output: 0 (720 degrees normalized to 0)

console.log(angle.degrees); // Not normalized, therefore still: 720
```

If you are unsure if an angle is normalized or not, just check `isNormalized()`.

```js
const angle = new Angle(720);
console.log(angle.isNormalized()); // false

const normalizedAngle = new Angle(720, true);
console.log(angle.isNormalized()); // true
```

## Adjusting angles dynamically

Often, you may need to adjust an existing angle by a certain amount, either in degrees or radians. The `Angle` class makes it easy to perform these adjustments with built-in methods:

```js
const angle = new Angle(30);

// Adjust the angle by 45 degrees
angle.adjustBy(45);
console.log(angle.degrees); // Output: 75

// Adjust the angle by another -100 degrees
angle.adjustBy(-100);
console.log(angle.degrees); // Output: -25

// Adjust the angle by radians (e.g., pi/4 radians or 45 degrees)
angle.adjustByRadians(Math.PI / 4);
console.log(angle.degrees); // Output: 20
```

## Serialize angle

When working with angles in **CanvasPainter.js**, you might need to serialize them into different formats for various purposes, such as saving state, sending data to a server, or exporting canvas elements. The `Angle` class provides two convenient methods for serializing its data: `toArray()` and `toJson()`.

### Serialize to array

The `toArray` method converts the angles's properties `degrees`, `radians` and `isNormalized` into an array. This can be useful when you need a lightweight representation of the angle, or when you need to work with libraries or functions that expect data in array format.

```js
const angle = new Angle(180);
angle.toArray(); // [180, 3.14159, false]
```

### Serialize to JSON

The `toJson` method converts the angle into a JSON object, which is useful when you need a more descriptive format or when interacting with APIs or data formats that require JSON.

```js
const angle = new Angle(-180, true);
angle.toJson(); // { degrees: 180, radians: 3.14159, isNormalized: true }
```