import { Type } from '@angular/core';

export interface Widgets {
  id: number;
  label: string;
  content: Type<unknown>;
}
