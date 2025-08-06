import { computed, effect, Injectable, signal } from '@angular/core';
import { Widgets } from '../models/dashboard';
import { Subscribers } from '../pages/dashboard/widgets/subscribers/subscribers';
import { Views } from '../pages/dashboard/widgets/views/views';
import { WatchTime } from '../pages/dashboard/widgets/watch-time/watch-time';
import { Revenue } from '../pages/dashboard/widgets/revenue/revenue';
import { Analytics } from '../pages/dashboard/widgets/analytics/analytics';

@Injectable()
export class DashboardService {
  widgets = signal<Widgets[]>([
    {
      id: 1,
      label: 'Subscribers',
      content: Subscribers,
      rows: 1,
      columns: 1,
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 2,
      label: 'Views',
      content: Views,
      rows: 1,
      columns: 1,
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 3,
      label: 'Watch Time',
      content: WatchTime,
      rows: 1,
      columns: 1,
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 4,
      label: 'Reveneu',
      content: Revenue,
      rows: 1,
      columns: 1,
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 5,
      label: 'Channel Analytics',
      content: Analytics,
      rows: 2,
      columns: 2,
    },
  ]);

  constructor(){
    this.fetchWidgets();
  }

  addedWidgets = signal<Widgets[]>([]);

  widgetsToAdd = computed(() => {
    const addedIds = this.addedWidgets().map((w) => w.id);
    return this.widgets().filter((w) => !addedIds.includes(w.id));
  });

  fetchWidgets() {
    const widgetsAsString = localStorage.getItem('dashboardWidgets');
    if (widgetsAsString) {
      const widgets = JSON.parse(widgetsAsString) as Widgets[];
      widgets.forEach(widget => {
        const content = this.widgets().find(w => w.id === widget.id)?.content;
        if (content) {
          widget.content = content;
        }
      })
      this.addedWidgets.set(widgets);
    }
  }

  addWidget(w: Widgets) {
    this.addedWidgets.set([...this.addedWidgets(), { ...w }]);
  }

  updateWidget(id: number, widget: Partial<Widgets>) {
    const index = this.addedWidgets().findIndex((w) => w.id === id);
    if (index !== -1) {
      const newWidgets = [...this.addedWidgets()];
      newWidgets[index] = { ...newWidgets[index], ...widget };
      this.addedWidgets.set(newWidgets);
    }
  }

  moveWidgetToRight(id: number) {
    const index = this.addedWidgets().findIndex((w) => w.id === id);
    if (index === this.addedWidgets().length - 1) {
      return;
    }

    const newWidgets = [...this.addedWidgets()];
    [newWidgets[index], newWidgets[index + 1]] = [
      { ...newWidgets[index + 1] },
      { ...newWidgets[index] },
    ];

    this.addedWidgets.set(newWidgets);
  }

  moveWidgetToLeft(id: number) {
    const index = this.addedWidgets().findIndex((w) => w.id === id);
    if (index === 0) {
      return;
    }

    const newWidgets = [...this.addedWidgets()];
    [newWidgets[index], newWidgets[index - 1]] = [
      { ...newWidgets[index - 1] },
      { ...newWidgets[index] },
    ];

    this.addedWidgets.set(newWidgets);
  }

  removeWidget(id: number) {
    this.addedWidgets.set(
      this.addedWidgets().filter((w) => w.id !== id)
    );
  }

  saveWidgets = effect(() => {
    const widgetsWithoutContent: Partial<Widgets>[] = this.addedWidgets().map(w => ({ ...w }));
    widgetsWithoutContent.forEach(w => {
      delete w.content;
    });

    localStorage.setItem('dashboardWidgets', JSON.stringify(widgetsWithoutContent));
  })
}
