import { Shape } from './Shape';

export class Circle extends Shape {
  constructor(center, radius, color, fill) {
    super('circle', color, fill);
    this.center = center;
    this.radius = radius;
  }

  toString() {
    return `${super.toString()} - ${this.center.x}, ${this.center.y} - ${this.radius}`;
  }
}