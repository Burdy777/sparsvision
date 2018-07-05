import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

export const ROUTES: Routes = [
  {component: WelcomeComponent, path: 'spars'},
  { path: '**', component: WelcomeComponent }
];
