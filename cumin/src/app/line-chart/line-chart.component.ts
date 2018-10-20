import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import gradient from 'gradient-color'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})

export class LineChartComponent {
  chart: any
  private _data: any

  @Input() set data(data: Array<any>) {
    this._data = data
  }

  ngOnChanges() {
    if (this._data) {
      console.log(this._data);
      let labels: Array<string> = [],
        data: Array<any> = []

      this._data.forEach((d) => {
        labels.push(d.name)
        data.push(d.popularity)
      })

      this.initialiseChart(labels, data);
    }
  }

  initialiseChart(labels: Array<string>, data: Array<any>) {
    let colours = gradient(['#35ff54', '#17fff9', '#9412ff'], data.length);

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: colours,
            fill: true,
            lineTension: 0
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    })
  }
}