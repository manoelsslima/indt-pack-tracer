import { Component, signal } from '@angular/core';
import { Sidebar } from './layout/components/sidebar/sidebar';
import { Layout } from "./layout/layout";

@Component({
  selector: 'app-root',
  imports: [Sidebar, Layout],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('frontend');
}
