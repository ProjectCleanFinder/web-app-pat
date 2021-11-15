import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ClientComponent} from "../components/client/client.component";
import {CleaningWorkerComponent} from "../components/cleaning-worker/cleaning-worker.component";
import {WelcomeComponent} from "../components/welcome/welcome.component";
import {MatCardModule, MatCardTitle} from "@angular/material/card";
import {MatButton, MatButtonModule} from "@angular/material/button";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    CleaningWorkerComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
