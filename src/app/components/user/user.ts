import { Component } from '@angular/core';

// This is called class decorator. It is used to define metadata for the class, such as the selector, template, and styles.
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {}
