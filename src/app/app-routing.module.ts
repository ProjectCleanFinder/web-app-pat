import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginClientComponent} from "../components/login-client/login-client.component";
import {LoginworkerComponent} from "../components/loginworker/loginworker.component";
import {WelcomeComponent} from "../components/welcome/welcome.component";
import {CleaningWorkerComponent} from "../components/cleaning-worker/cleaning-worker.component";
import {ClientComponent} from "../components/client/client.component";
import {CleaningOrderComponent} from "../components/cleaning-order/cleaning-order.component";
import {OrderslistComponent} from "../components/orderslist/orderslist.component";
import {DetallesordenComponent} from "../components/detallesorden/detallesorden.component";
import {PublicrequestsComponent} from "../components/publicrequests/publicrequests.component";




const routes: Routes=[

  {path: '', component: WelcomeComponent},
  {path: 'loginclient', component: LoginClientComponent},
  {path: 'loginworker', component: LoginworkerComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'worker', component: CleaningWorkerComponent},
  {path: 'client', component: ClientComponent},
  {path: 'cleaningorder', component: CleaningOrderComponent},
  {path: 'orderlist', component: OrderslistComponent},
  {path: 'cleaning-worker', component: CleaningWorkerComponent},
  {path: 'detallesorden', component: DetallesordenComponent},
  {path: 'publicrequest', component: PublicrequestsComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
