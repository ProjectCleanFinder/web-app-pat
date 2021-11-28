import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ClientComponent} from "../components/client/client.component";
import {CleaningWorkerComponent} from "../components/cleaning-worker/cleaning-worker.component";
import {WelcomeComponent} from "../components/welcome/welcome.component";
import {MatCardModule, MatCardTitle} from "@angular/material/card";
import {MatButton, MatButtonModule} from "@angular/material/button";
import { AppRoutingModule } from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";
import {APP_BASE_HREF} from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule} from "@angular/material/table";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from "@angular/material/dialog";
import {CleaningOrderComponent} from "../components/cleaning-order/cleaning-order.component";
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from "@angular/material/core";
import {OrderslistComponent} from "../components/orderslist/orderslist.component";
import {PublicrequestsComponent} from "../components/publicrequests/publicrequests.component";
import {DetallesordenComponent} from "../components/detallesorden/detallesorden.component";
import {LoginClientComponent} from "../components/login-client/login-client.component";
import {LoginworkerComponent} from "../components/loginworker/loginworker.component";
import {PendingworksComponent} from "../components/pendingworks/pendingworks.component";


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    CleaningWorkerComponent,
    WelcomeComponent,
    LoginClientComponent,
    LoginworkerComponent,
    CleaningOrderComponent,
    OrderslistComponent,
    CleaningWorkerComponent,
    PublicrequestsComponent,
    DetallesordenComponent,
    PendingworksComponent

  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatToolbarModule,
    RouterModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatExpansionModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
