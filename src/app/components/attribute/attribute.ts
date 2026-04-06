import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  imports: [NgClass, NgStyle],
  templateUrl: './attribute.html',
  styleUrl: './attribute.css',
})
export class Attribute {
  studentList = [
    { name: 'Alice', city: 'Pune', status: true },
    { name: 'Bob', city: 'Mumbai', status: false },
    { name: 'Charlie', city: 'Kolkata', status: true },
  ];

  themeClass: string = 'bg-success';

  customCSS: any = {
    'background-color': 'lightblue',
    'color': 'darkblue',
    'font-size': '10px',
  };
}
