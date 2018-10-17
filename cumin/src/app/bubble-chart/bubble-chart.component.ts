import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import * as d3 from 'd3'

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BubbleChartComponent implements OnChanges {
  @ViewChild('chart') chartElement: ElementRef

  @Input()
  chartData: Array<any>

  private svgElement: HTMLElement
  private chartProps: any

  constructor() { }

  ngOnChanges() {
    if (this.chartData) {
      this.buildChart()
    }
  }

  buildChart() {
    this.chartProps = {}

    let svg = d3.select(this.chartElement.nativeElement)
      .append('svg')
      .attr('width', '100%')
      .attr('height', 400)

    let scaleRadius = d3.scaleLinear()
      .domain([
        d3.min(this.chartData, (d) => +d.popularity ),
        d3.max( this.chartData, (d) => +d.popularity )
      ])
      .range([5, 20])

    let bound = d3.select(this.chartElement.nativeElement).node().getBoundingClientRect()

    var simulation = d3.forceSimulation(this.chartData)
      .force("charge", d3.forceManyBody())
      .force("x", d3.forceX())
      .force("y", d3.forceY())
      .on("tick", () => {
        leaf.attr("cx", d => ((bound.width / 2) + d.x)).attr("cy", d => ((400 / 2) + d.y))
      });

    let leaf = svg.selectAll('g')
      .data(this.chartData)
      .enter().append('g')
        .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`)

    leaf.append('circle')
      .attr('r', d => scaleRadius(d.popularity))
      .style('fill', '#FFF')

    this.chartProps.svg = svg
  }
}
