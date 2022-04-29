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
      nzTitle: 'Rajout de données en cours.',
      nzContent: `<h2>Ce site est toujours en cours construction</h2>
                  <p>Nous avons encore plein d'idées et de données à choisir et traiter, nous tâchons de mettre à jour le site à jour le plus régulièrement possible.</p>
                  <p>N'hésitez pas à proposer des statistiques que vous souhaiteriez voir apparaître !</p>`,
      nzOnOk: () => this.desktopExperience()
    });
  }

  desktopExperience(): void {
    this.modal.info({
      nzCentered: true,
      nzWidth: '800px',
      nzTitle: 'Expérience utilisateur',
      nzContent: `<h2>Ce site est plus beau sur un PC ou tablette !</h2>
                  <p>Nous travaillons pour améliorer encore l'expérience utilisateur sur mobile !</p>`,
      nzOnOk: () => console.log('Info OK')
    });
  }

  navigateToHref(url: string) {
    window.open(url, "_blank");
  }

}
