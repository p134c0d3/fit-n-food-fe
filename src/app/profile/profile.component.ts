import { log } from 'node:console';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  constructor() {}

  updateProfile() {
    console.log('Profile Edited!');
  }
}
