// This file is the main entry point of the Angular application. It defines the root component, App,
// which serves as the container for all other components in the application. The App component imports
// and uses multiple components to demonstrate various features of Angular.
//
// RouterOutlet is a directive which is responsible to load the activated route component.
// It is a placeholder for the routed components. When a user navigates to a specific route,
// the corresponding component will be rendered inside the router-outlet.
// To use it, you need to import it from '@angular/router' and include it in the imports array
// of the @Component decorator. Then in app.html, you must include the <router-outlet></router-outlet>
// tag where you want the routed components to be displayed.
// And then you can define your routes in a separate file (e.g., app.routes.ts) and use the
// RouterModule to configure the routes in your application.
//
// RouterLink is a directive that allows you to link to specific routes in your application.
// It is used to create navigation links in your templates. When a user clicks on a RouterLink,
// it will navigate to the specified route and load the corresponding component.
//
// RouterLinkActive is a directive that adds a CSS class to an element when the linked route is active.
// It is used to highlight the active navigation link in your templates. When a user clicks on a
// RouterLink, the RouterLinkActive directive will add the specified CSS class to the element,
// allowing you to style it differently when it is active.

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
