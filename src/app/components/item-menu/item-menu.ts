import { Component, computed, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../../models/MenuItem';

@Component({
  selector: 'app-item-menu',
  imports: [MatListModule, MatIconModule, RouterModule, ItemMenu],
  templateUrl: './item-menu.html',
  styleUrl: './item-menu.css',
})
export class ItemMenu {
  item = input.required<MenuItem>();
  collapsed = input(true);
  routeHistory = input('');
  nestedItemOpen = signal(false);
  level = computed(() => this.routeHistory().split('/').length - 1);
  indentation = computed(() => this.collapsed() ? `${(16 + (this.level() * 16))}px` : '16px');
}
