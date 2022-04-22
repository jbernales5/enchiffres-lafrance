import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgChartsModule } from 'ng2-charts';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzLayoutModule,
    NzTypographyModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzCardModule,
    NzTabsModule,
    NzModalModule,
    NzPopoverModule,
    NzButtonModule,
    NzAlertModule
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
