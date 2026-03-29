// This is the main entry point of the Angular application. It is responsible for bootstrapping the application and
// starting the Angular framework. It imports the necessary modules and components, and then calls the
// bootstrapApplication function to start the application.
// Angular installation: https://angular.dev/installation

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
