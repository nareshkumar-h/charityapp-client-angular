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
import { AuthService } from './service/auth.service';
import { ViewrequestComponent } from './core/viewrequest/viewrequest.component';
import { ForgotpasswordComponent } from './core/forgotpassword/forgotpassword.component';
import { ListRequestContributionComponent } from './core/list-request-contribution/list-request-contribution.component';
import { AuthguardGuard } from './authguard.guard';


const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'donorregister',component:DonorregisterComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'donorcontribute',component:DonorcontributeComponent,canActivate:[AuthguardGuard]},
  {path:'donortransaction',component:DonortransactionComponent,canActivate:[AuthguardGuard]},
  {path:'listrequest',component:ListrequestComponent,canActivate:[AuthguardGuard]},
  {path:'mydonationlist',component:MydonationlistComponent,canActivate:[AuthguardGuard]},
  {path:'auth',component:AuthService},
  {path:'listrequest/:id',component:ViewrequestComponent,canActivate:[AuthguardGuard]},
  {path:'list-requestcontribution/:id',component:ListRequestContributionComponent,canActivate:[AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
