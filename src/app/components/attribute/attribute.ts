import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  imports: [NgClass],
  templateUrl: './attribute.html',
  styleUrl: './attribute.css',
})
export class Attribute {
  studentList = [
    { name: 'Alice', city: 'Pune', status: true },
    { name: 'Bob', city: 'Mumbai', status: false },
    { name: 'Charlie', city: 'Kolkata', status: true },
  ];
}
