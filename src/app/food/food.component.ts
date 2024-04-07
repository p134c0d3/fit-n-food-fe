import { Component } from '@angular/core';
import { Food } from '../models/food.model';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css',
})
export class FoodComponent {
  public foods: Food[] = [
    new Food('Croissant', 450),
    new Food('Pizza', 1250),
    new Food('Hamburger', 750)
  ]

  totalConsumedCalories: number = 3450;
  constructor() {}

  addFood() {
    console.log('Food added!');
  }
}
