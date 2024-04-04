import { Component } from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-water',
  standalone: true,
  imports: [],
  templateUrl: './water.component.html',
  styleUrl: './water.component.css'
})
export class WaterComponent {
  waterOunces = 4

  constructor() { }

  addWater() {
    console.log('Water added!');
  }

}
