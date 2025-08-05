import { Component, inject, input, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Widgets } from '../../../models/dashboard';
import { DashboardService } from '../../../services/dashboard-service';
@Component({
  selector: 'app-widget-options',
  imports: [MatButtonModule, MatIconModule, MatButtonToggleModule],
  templateUrl: './widget-options.html',
  styleUrl: './widget-options.css',
})
export class WidgetOptions {
  data = input.required<Widgets>();
  showOptions = model<boolean>(false);
  store = inject(DashboardService);
}
