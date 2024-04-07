export class Profile {
  public _bio: string;
  public _goals: string;

  constructor(bio: string, goals: string) {
    this._bio = bio;
    this._goals = goals;
  }

  get profileBio(): string {
    return this._bio;
  }

  set profileBio(value: string) {
    this._bio = value;
  }

  get profileGoals(): string {
    return this._goals;
  }

  set profileGoals(value: string) {
    this._goals = value;
  }
}
