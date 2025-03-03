export class Shape {
  constructor(type, color, fill) {
    this.type = type;
    this.color = color;
    this.fill = fill;
  }
  toString() {
    return `${this.type} - ${this.color} - ${this.fill}`;
  }
}