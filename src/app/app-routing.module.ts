import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { Barv2Component } from './barv2/barv2.component';
import { Barv3Component } from './barv3/barv3.component';

const routes: Routes = [
  {path:'bar-chart', component: BarChartComponent},
  {path:'line-chart', component: LineChartComponent},
  {path:'barv2', component: Barv2Component},
  {path:'barv3', component: Barv3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
