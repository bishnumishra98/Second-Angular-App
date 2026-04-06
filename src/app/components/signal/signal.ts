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

  // To update the value of a signal that is an array, we can use the update method of the signal object.
  // The update method takes a function that receives the current value of the signal and returns a new
  // value based on it.
  cityList = signal<string[]>(["Kolkata", "Mumbai", "Delhi"]);
  addCity(newCity: string) {
    this.cityList.update(cities => [...cities, newCity]);
  }

  // Update method on signal object
  studentObj = signal<any>({
    name: "Bishnu",
    age: 27
  });

  increaseAge() {
    this.studentObj.update(student => ({ ...student, age: student.age + 1 }));
  }

  // ● Difference between signal and normal variable:
  // 1. A normal variable is a simple value that can be read and updated directly,
  //    while a signal is a reactive primitive that allows you to create reactive state
  //    that can be easily shared across components and services.
  // 2. A normal variable does not have any built-in mechanism for tracking changes or notifying other
  //    parts of the application when its value changes, while a signal automatically tracks changes and
  //    notifies any subscribers when its value changes.

  // ● Difference between set and update methods of a signal:
  // 1. The set method is used to update the value of a signal completely directly by providing a new value,
  //    while the update method is used to append a new value to the existing value of a signal.


}
