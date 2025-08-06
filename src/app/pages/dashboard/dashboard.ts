import { Component, ElementRef, inject, OnInit, viewChild } from '@angular/core';
import { Widget } from '../../components/widget/widget';
import { DashboardService } from '../../services/dashboard-service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { wrapGrid } from 'animate-css-grid';

@Component({
  selector: 'app-dashboard',
  imports: [Widget, MatButtonModule, MatIconModule, MatMenuModule],
  providers: [DashboardService],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  store = inject(DashboardService);

  dashboard = viewChild.required<ElementRef>('dashboard');

  ngOnInit(){
    wrapGrid(this.dashboard().nativeElement, { duration: 300 })
  }
}
