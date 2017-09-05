import { NgModule } from '@angular/core';

import { ColcadeGridComponent } from './colcade-grid.component';
import { ColcadeGridColDirective } from './colcade-grid-col.directive';
import { ColcadeGridItemDirective } from './colcade-grid-item.directive';


@NgModule({
  declarations: colcadeComponents(),
  exports: colcadeComponents()
})

export class ColcadeModule { }

export function colcadeComponents() {
  return [
    ColcadeGridComponent,
    ColcadeGridColDirective,
    ColcadeGridItemDirective
  ];
}
