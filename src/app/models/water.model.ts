export class Water {
  public _ounces: number = 0;

  constructor(
    ounces: number
  ) {
    this._ounces = ounces;
  }

  get waterOunces() {
    return this._ounces
  }

  set waterOunces(value: number) {
    this._ounces = value;
  }
}
