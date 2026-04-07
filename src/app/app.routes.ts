// This file defines the routes for the Angular application. It imports the necessary components and
// sets up the routing configuration. The routes array contains objects that define the path and the
// corresponding component to be rendered when the user navigates to that path.

import { Routes } from '@angular/router';   // import the Routes type from @angular/router
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';
import { Attribute } from './components/attribute/attribute';
import { Photos } from './components/photos/photos';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'controlflow',
        pathMatch: 'full'
    },
    {
        path: 'controlflow',
        component: ControlFlow
    },
    {
        path: 'data-binding',
        component: DataBinding
    },
    {
        path: 'signal',
        component: Signal
    },
    {
        path: 'attribute',
        component: Attribute
    },
    {
        path: 'photos',
        component: Photos
    },
    {
        // Wildcard route. If user navigates to a path that doesn't match any of the above routes,
        // it will be redirected to this component.
        // Ideally, you should make a NotFound component and redirect to that instead of redirecting
        // to an existing component.
        path: '**',
        redirectTo: 'controlflow'
    }
];
