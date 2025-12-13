import { Routes } from '@angular/router';
import { Login } from './core/components/login/login';
import { Home } from './pages/home/home/home';
import { Register } from './core/components/register/register/register';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'home', component: Home },
  { path: 'register', component: Register },
];
