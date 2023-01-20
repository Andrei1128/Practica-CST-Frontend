import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulRoutingModule } from './modul-routing.module';
import { CardComponent } from './card/card.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button'

@NgModule({
  declarations: [
    CardComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    ModulRoutingModule,
    NzModalModule,
    NzCardModule,
    NzButtonModule
  ],
  exports:[
    HomepageComponent
  ]
})
export class ModulModule { }
