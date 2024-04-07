import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { log } from 'node:console';
import { Water } from '../models/water.model';

@Component({
  selector: 'app-water',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './water.component.html',
  styleUrl: './water.component.css',
})
export class WaterComponent {
  waterOunces: Water = new Water(32);
  totalOunces: number = 32;

  constructor() {}

  addWater() {
    console.log('Water added!');
  }
}
