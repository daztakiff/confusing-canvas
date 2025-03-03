import { Shape } from './Shape';

export class Square extends Shape {
  constructor(corner, length, color, fill) {
    super('square', color, fill);
    this.corner = corner
    this.length = length;
  }

  toString() {
    return `${super.toString()} - ${this.corner.x}, ${this.corner.y} - ${this.length}`;
  }
}