import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { Workout } from '../models/workout.model';
@Component({
  selector: 'app-workouts',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.css',
})
export class WorkoutsComponent {
  public workouts: Workout[] = [
    new Workout('Bench Press', 3, 10, 100),
    new Workout('Shoulder Fly', 5, 8, 550),
    new Workout('Treadmill', 2, 7, 400),
  ];

  totalBurnedCalories: number = 1050;

  constructor() {
    // this.workouts = [
    //   new Workout('Workout 1', 3, 100),
    //   new Workout('Workout 2', 5, 550),
    //   new Workout('Workout 3', 2, 400),
    // ];
  }

  addWorkout() {
    console.log('Workout Added');
  }
}
