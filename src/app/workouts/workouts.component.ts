import { Component } from '@angular/core';
import { Workout } from '../workout.model';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-workouts',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.css',
})
export class WorkoutsComponent {
  public workouts: Workout[] = [];

  constructor() {
    this.workouts = [
      new Workout('Workout 1', 3, 100),
      new Workout('Workout 2', 5, 550),
      new Workout('Workout 3', 2, 400),
    ];
  }

  addWorkout() {
    console.log('Workout Added');
  }
}
