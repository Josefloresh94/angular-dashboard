import { Component, inject } from '@angular/core';
import { Widget } from '../../components/widget/widget';
import { DashboardService } from '../../services/dashboard-service';
@Component({
  selector: 'app-dashboard',
  imports: [Widget],
  providers: [DashboardService],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  store = inject(DashboardService);
}
