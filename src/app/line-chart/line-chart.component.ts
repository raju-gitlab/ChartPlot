import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  canvas: any = ElementRef;
  chartType: string = 'line';
  chartData: any = [];
  chartLabels: any = [];
  chartColors: any = [];
  public chartOptions: any;

  ngOnInit() : void {
    this.chartData = [{
      data: [30, -114, 4.5, -22, 5], fill: {
        target: 'origin',
        above: 'rgba(255,193,206, 0.6)',
        below: 'rgba(255,193,206, 0.6)'
      },
      borderColor: "rgba( 255,193,206, 0.7)",
      tension : "0.5",
      pointRadius: 5
    }];
    this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  }
}
