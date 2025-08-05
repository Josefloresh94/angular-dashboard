import { Component, input, signal } from '@angular/core';
import { Widgets } from '../../models/dashboard';
import { NgComponentOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { WidgetOptions } from './widget-options/widget-options';

@Component({
  selector: 'app-widget',
  imports: [NgComponentOutlet, MatButtonModule, MatIconModule, WidgetOptions],
  templateUrl: './widget.html',
  styleUrl: './widget.css',
  host: {
    '[style.grid-area]':
      '"span " + (data().rows ?? 1) + "/ span " + (data().columns ?? 1)',
  },
})
export class Widget {
  data = input.required<Widgets>();
  showOptions = signal(false);
}
