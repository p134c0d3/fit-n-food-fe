export class Food {
  public _foodName: string;
  public _calories: number;

  constructor(
    foodName: string,
    calories: number = 0
  ) {
    this._foodName = foodName;
    this._calories = calories;
  }

  get foodName(): string {
    return this._foodName;
  }

  set workoutName(value: string) {
    this._foodName = value;
  }

  get calories(): number {
    return this._calories;
  }

  set calories(value: number) {
    this._calories = value;
  }
}
