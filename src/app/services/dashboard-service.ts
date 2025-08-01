import { Injectable, signal } from '@angular/core';
import { Widgets } from '../models/dashboard';
import { Subscribers } from '../pages/dashboard/widgets/subscribers/subscribers';
import { Views } from '../pages/dashboard/widgets/views/views';

@Injectable()
export class DashboardService {
  widgets = signal<Widgets[]>([
    {
      id: 1,
      label: 'Subscribers',
      content: Subscribers,
    },
    {
      id: 2,
      label: 'Views',
      content: Views,
    },
  ]);
}
