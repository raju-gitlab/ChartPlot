import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, LineController, LineElement, PointElement, LinearScale, Title} from 'chart.js' 
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-barv3',
  templateUrl: './barv3.component.html',
  styleUrls: ['./barv3.component.css']
})
export class Barv3Component {
  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    }
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType : any = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [-65, 59, 80, 81, -56, -55, 40], backgroundColor : "rgba(255, 99, 132, 0.5)"},
    {data: [40, -9, -2, 77, 40, 55, 100], backgroundColor : "rgba(84, 207, 177, 0.5)"}
  ];
  ngOnInit() {
  }
}
