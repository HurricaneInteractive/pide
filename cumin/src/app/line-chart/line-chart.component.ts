import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import gradient from 'gradient-color'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})

export class LineChartComponent {
  @ViewChild('chart') private chartRef
  chart: any
  private _data: any

  @Input() set data(data: Array<any>) {
    this._data = data
  }

  @Input() type: string;
  @Input() labelkey: string;
  @Input() datakey: string;

  ngOnChanges() {
    if (this._data) {
      let labels: Array<string> = [],
        data: Array<any> = []

      this._data.forEach((d) => {
        let label = d.hasOwnProperty(this.labelkey) ? d[this.labelkey] : 'default'
        let stat = d.hasOwnProperty(this.datakey) ? d[this.datakey] : 0

        if (this.datakey === 'duration_ms') {
          stat = Math.round((stat / 60000) * 100) / 100
        }

        labels.push(label)
        data.push(stat)
      })

      this.initialiseChart(labels, data);
    }
  }

  initialiseChart(labels: Array<string>, data: Array<any>) {
    let colours = gradient(['#35ff54', '#17fff9', '#9412ff'], data.length);
    
    let settings = this.type === 'bar' ? {
      backgroundColor: colours,
      fill: true
    } : {
      borderColor: '#35ff54',
      pointBackgroundColor: colours,
      pointBorderColor: colours,
      borderCapStyle: 'round',
      showLine: false,
      lineTension: 0
    }

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: this.type,
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            ...settings
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
            display: true,
            gridLines: {
              color: '#757575'
            }
          }]
        },
        layout: {
          padding: 10
        }
      }
    })
  }
}