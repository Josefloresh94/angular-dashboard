import { Component, input } from '@angular/core';
import { Widgets } from '../../models/dashboard';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-widget',
  imports: [NgComponentOutlet],
  templateUrl: './widget.html',
  styleUrl: './widget.css',
})
export class Widget {
  data = input.required<Widgets>();
}
