import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Sidebar, Header, Footer, MatDrawer, MatDrawerContainer],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
@ViewChild('drawer') drawer!: MatDrawer;
  showSidebar = false;

  toggleSidebar() {
    this.drawer.toggle();
    this.showSidebar = !this.showSidebar;
  }

}
