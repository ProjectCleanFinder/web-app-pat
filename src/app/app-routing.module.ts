import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "../components/login/login.component";
import {WelcomeComponent} from "../components/welcome/welcome.component";
import {CleaningWorkerComponent} from "../components/cleaning-worker/cleaning-worker.component";
import {ClientComponent} from "../components/client/client.component";




const routes: Routes=[

  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'worker', component: CleaningWorkerComponent},
  {path: 'client', component: ClientComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
