import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, LineController, LineElement, PointElement, LinearScale, Title} from 'chart.js' 
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-barv2',
  templateUrl: './barv2.component.html',
  styleUrls: ['./barv2.component.css']
})
export class Barv2Component implements OnInit {
  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType : any = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [-65, 59, 80, 81, -56, 55, 40], label: 'Series A'}
  ];
  ngOnInit() {
  }
}
