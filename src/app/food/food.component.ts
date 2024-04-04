import { Component } from '@angular/core';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css',
})
export class FoodComponent {
  constructor() {}

  addFood() {
    console.log('Food added!');
  }
}
