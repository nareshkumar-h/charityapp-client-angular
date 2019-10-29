import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { headersToString } from 'selenium-webdriver/http';
import { HeaderComponent } from './design/header/header.component';
import { FooterComponent } from './design/footer/footer.component';
import { AdminloginComponent } from './core/adminlogin/adminlogin.component';
import { DonorcontributeComponent } from './core/donorcontribute/donorcontribute.component';
import { DonortransactionComponent } from './donortransaction/donortransaction.component';
import { ListrequestComponent } from './listrequest/listrequest.component';
import { MydonationlistComponent } from './mydonationlist/mydonationlist.component';
import { DonorregisterComponent } from './core/donorregister/donorregister.component';


const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'donorcontribute',component:DonorcontributeComponent},
  {path:'donortransaction',component:DonortransactionComponent},
  {path:'listrequest',component:ListrequestComponent},
  {path:'mydonationlist',component:MydonationlistComponent},
  {path:'donorregister',component:DonorregisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
