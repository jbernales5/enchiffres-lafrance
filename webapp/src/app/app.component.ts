import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataset, ChartType, Chart, ChartOptions } from 'chart.js';

import { NzModalService, OnClickCallback } from 'ng-zorro-antd/modal';

import AnnotationPlugin from "chartjs-plugin-annotation";

import { data } from '../data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  dataset = data;

  public lineChartLegend = true;
  public lineChartPlugins = [AnnotationPlugin];

  constructor(private modal: NzModalService) {
    Chart.register(AnnotationPlugin);
   }

  ngOnInit() {
    this.wipInfo();
  }

  wipInfo(): void {
    this.modal.info({
      nzCentered: true,
      nzWidth: '800px',
      nzTitle: 'Rajout de données en cours...',
      nzContent: `<h2>Ce site est toujours en cours construction</h2>
                  <p>Il est aussi plus beau sur PC ou sur une tablette !</p>`
    });
  }

  navigateToHref(url: string) {
    window.open(url, "_blank");
  }

}
