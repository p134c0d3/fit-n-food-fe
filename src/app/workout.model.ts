// src/app/models/workout.model.ts

export class Workout {
  public _workoutName: string;
  public _sets: number;
  public _reps: number;
  public _caloriesBurned: number;

  constructor(
    name: string,
    sets: number,
    reps: number,
    caloriesBurned: number = 0
  ) {
    this._workoutName = name;
    this._sets = sets;
    this._reps = reps;
    this._caloriesBurned = caloriesBurned;
  }

  get workoutName(): string {
    return this._workoutName;
  }

  set workoutName(value: string) {
    this._workoutName = value;
  }

  get sets(): number {
    return this._sets;
  }

  set sets(value: number) {
    this._sets = value;
  }

  get reps(): number {
    return this._reps;
  }

  set reps(value: number) {
    this._reps = value;
  }

  get caloriesBurned(): number {
    return this._caloriesBurned;
  }

  set caloriesBurned(value: number) {
    this._caloriesBurned = value;
  }
}
