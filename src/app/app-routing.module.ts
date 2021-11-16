import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginClientComponent} from "../components/login-client/login-client.component";
import {LoginworkerComponent} from "../components/loginworker/loginworker.component";
import {WelcomeComponent} from "../components/welcome/welcome.component";
import {CleaningWorkerComponent} from "../components/cleaning-worker/cleaning-worker.component";
import {ClientComponent} from "../components/client/client.component";




const routes: Routes=[

  {path: 'loginclient', component: LoginClientComponent},
  {path: 'loginworker', component: LoginworkerComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'worker', component: CleaningWorkerComponent},
  {path: 'client', component: ClientComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
