import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { Barv2Component } from './barv2/barv2.component';
import { Barv3Component } from './barv3/barv3.component';
@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    LineChartComponent,
    Barv2Component,
    Barv3Component
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
