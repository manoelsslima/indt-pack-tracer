import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIcon, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Output() toggleSidebar = new EventEmitter<void>();
}
