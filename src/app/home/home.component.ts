import { Component } from '@angular/core';
import { WorkoutsComponent } from '../workouts/workouts.component';
import { FoodComponent } from '../food/food.component';
import { WaterComponent } from '../water/water.component';
import { ProfileComponent } from "../profile/profile.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        WorkoutsComponent,
        FoodComponent,
        WaterComponent,
        ProfileComponent
    ]
})
export class HomeComponent {

}
