import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

// This is called class decorator. It is used to define metadata for the class, such as the selector, template, and styles.
@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit, AfterViewInit, OnDestroy {
  // Constructor is a special method that is called when an instance of the class is created. It is used to initialize the
  // class and perform any setup that is required before the class can be used like property initialization, dependency injection,
  // or any other setup tasks.
  // It is not a part of the Angular component lifecycle, but it is a common place to perform initialization tasks.
  // In TypeScript, the constructor keyword is used to define a constructor method in a class, unlike other programming
  // languages where constructors names are the same as the class name.
  constructor() {
    console.log('Admin component created');
  }

  // ngOnInit is a lifecycle hook that is called after the component is initialized. It is used to perform any additional
  // initialization tasks that require the component to be fully initialized, such as fetching data from a server or
  // setting up event listeners. It is a part of the Angular component lifecycle and is called after the constructor.
  ngOnInit(): void {
    console.log('Admin component initialized');
  }

  // ngAfterViewInit is a lifecycle hook that is called after the component's view has been fully initialized. It is used to
  // perform any tasks that require the component's view to be fully initialized, such as manipulating the DOM or
  // accessing child components. It is a part of the Angular component lifecycle and is called after ngOnInit.
  ngAfterViewInit(): void {
    console.log('Admin component view initialized');
  }

  // ngOnDestroy is a lifecycle hook that is called just before the component is destroyed. It is used to perform any cleanup
  // tasks that are required before the component is destroyed, such as unsubscribing from observables or removing event
  // listeners. It is a part of the Angular component lifecycle and is called just before the component is destroyed.
  ngOnDestroy(): void {
    console.log('Admin component destroyed');
  }
}
