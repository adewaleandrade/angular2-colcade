import { NgModule } from '@angular/core';

import { ColcadeGridComponent } from './colcade-grid.component';
import { ColcadeGridColDirective } from './colcade-grid-col.directive';
import { ColcadeGridItemDirective } from './colcade-grid-item.directive';

let colcadeComponents = [
  ColcadeGridComponent,
  ColcadeGridColDirective,
  ColcadeGridItemDirective
];

@NgModule({
  declarations: colcadeComponents,
  exports: colcadeComponents
})

export class ColcadeModule { }
