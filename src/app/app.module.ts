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
import {LoginComponent} from "../components/login/login.component";
import {MatTableModule} from "@angular/material/table";
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    CleaningWorkerComponent,
    WelcomeComponent,
    LoginComponent


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



  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
