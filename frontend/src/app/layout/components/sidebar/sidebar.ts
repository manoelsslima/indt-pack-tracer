import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  itemsDoMenu = [
    {
      routeLink: 'dashboard',
      icon: 'home',
      label: 'Dashboard'
    },
    {
      routeLink: 'dashboard',
      icon: 'home',
      label: 'Dashboard'
    },
    {
      routeLink: 'dashboard',
      icon: 'home',
      label: 'Dashboard'
    },
    {
      routeLink: 'dashboard',
      icon: 'home',
      label: 'Dashboard'
    },
    {
      routeLink: 'dashboard',
      icon: 'home',
      label: 'Dashboard'
    },
    {
      routeLink: 'dashboard',
      icon: 'home',
      label: 'Dashboard'
    },
  ]
}
