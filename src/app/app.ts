import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomSidenav } from './components/custom-sidenav/custom-sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    CustomSidenav,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  collapsed = signal(false);
  sidenavWidth = computed(() => (this.collapsed() ? '250px' : '64px'));
}
