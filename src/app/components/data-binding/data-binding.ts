import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: string = "Angular Data Binding";
  currentDate: Date = new Date();
  rollNo: number = 101;

  minTestLength: number = 5;
  spanClass: string = "secondary";   // this variable will be used to bind a CSS class to an HTML element

  displayCourseInfo() {
    console.log(`Course Name: ${this.courseName}`);
    console.log(`Current Date: ${this.currentDate}`);
    console.log(`Roll Number: ${this.rollNo}`);
  }

  displayCourseInfoForUI() {
    return `Course Name: ${this.courseName},
    Current Date: ${this.currentDate.toLocaleDateString()},
    Roll Number: ${this.rollNo}`;
  }


  constructor() {
    // Accessing a variable
    this.courseName = "Updated Course Name";

    // Accessing a method
    this.displayCourseInfo();
  }

  displayAlert() {
    alert("Alert displayed!");
  }
}
