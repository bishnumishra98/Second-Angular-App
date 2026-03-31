import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  courseName: string = "Angular";

  // Variables can also be declared as signals. Signals are a new reactive primitive in Angular that allow you
  // to create reactive state that can be easily shared across components and services.
  // It was introduced from Angular version 20.
  // Signal is a function that takes an initial value and returns a signal object that can be used to
  // read and update the value.
  angularVersion = signal("20");

  // We can even explicitly specify the type of the signal using generics.
  courseDuration = signal<string>("2 months");

  // To update the value of a signal, we can use the set method of the signal object. The set method takes
  // a new value and updates the signal with that value.
  changeDuration() {
    this.courseDuration.set("3 months");
  }
}
