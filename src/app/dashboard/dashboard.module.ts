import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TripCardComponent } from './trip-card/trip-card.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRateModule } from 'ng-zorro-antd/rate';

@NgModule({
  declarations: [DashboardPageComponent, TripCardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzCardModule,
    NzButtonModule,
    FormsModule,
    NzInputModule,
    NzIconModule,
    NzDropDownModule,
    NzModalModule,
    NzRateModule,
  ],
})
export class DashboardModule {}
