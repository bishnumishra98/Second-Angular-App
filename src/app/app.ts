// This file is the main entry point of the Angular application. It defines the root component, App,
// which serves as the container for all other components in the application. The App component imports
// and uses multiple components to demonstrate various features of Angular.
//
// To create a new component in Angular:
// 1. Use the Angular CLI command: ng generate component component-name OR ng g c component-name
//    This will create a new folder with the component files (HTML, CSS, TypeScript).
// 2. Import the component in the app.ts file, i.e., this file and add it to the imports array
//    of the @Component decorator.
// 3. Use the component selector in the app.html file to display the component in the UI.


import { Component, signal } from '@angular/core';
import { Admin } from "./components/admin/admin";
import { User } from "./components/user/user";
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';
import { ControlFlow } from './components/control-flow/control-flow';
import { Attribute } from './components/attribute/attribute';

@Component({
  selector: 'app-root',
  imports: [Admin, User, DataBinding, Signal, ControlFlow, Attribute],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
}
