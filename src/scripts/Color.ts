export class Color {
  _r: number;
  _g: number;
  _b: number;
  _a: number;
  constructor(r: number, g: number, b: number, a: number = 1.0) {
    this._r = r;
    this._g = g;
    this._b = b;
    this._a = a;
  }

  get r() {
    return this._r;
  }

  get g() {
    return this._g;
  }

  get b() {
    return this._b;
  }

  get a() {
    return this._a;
  }

  set r(r) {
    this._r = r;
  }

  set g(g) {
    this._g = g;
  }

  set b(b) {
    this._b = b;
  }

  set a(a) {
    this._a = a;
  }

  // Method to return CSS rgba string
  rgba() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }

  // Method to return CSS hex string
  hex() {
    const toHex = (c: number) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${toHex(this.r)}${toHex(this.g)}${toHex(this.b)}`;
  }

  // Method to mix with another color
  mix(color: Color, weight: number) {
    const p = weight === undefined ? 0.5 : weight;
    const w = p * 2 - 1;
    const a = this.a - color.a;

    const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
    const w2 = 1 - w1;

    return new Color(
      Math.round(this.r * w1 + color.r * w2),
      Math.round(this.g * w1 + color.g * w2),
      Math.round(this.b * w1 + color.b * w2),
      this.a * p + color.a * (1 - p)
    );
  }

  // Method to adjust brightness
  adjustBrightness(factor: number) {
    this.r = Math.min(255, Math.max(0, this.r * factor));
    this.g = Math.min(255, Math.max(0, this.g * factor));
    this.b = Math.min(255, Math.max(0, this.b * factor));
  }
}
