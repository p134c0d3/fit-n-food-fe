import { log } from 'node:console';
import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  public userProfile: Profile = new Profile('My Bio', 'My Goals');
  public firstName: string = 'John';
  constructor() {}

  updateProfile() {
    console.log('Profile Edited!');
  }
}
