import { Component } from '@angular/core';
import { WorkoutsComponent } from '../workouts/workouts.component';
import { FoodComponent } from '../food/food.component';
import { WaterComponent } from '../water/water.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    WorkoutsComponent,
    FoodComponent,
    WaterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
