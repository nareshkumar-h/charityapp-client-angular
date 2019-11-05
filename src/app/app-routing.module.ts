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
import { ViewRequestorVideoServiceService } from './service/view-requestor-video-service.service';
import { ViewRequestorVideoComponent } from './view-requestor-video/view-requestor-video.component';


const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'donorcontribute',component:DonorcontributeComponent},
  {path:'donortransaction',component:DonortransactionComponent},
  {path:'listrequest',component:ListrequestComponent},
  {path:'mydonationlist',component:MydonationlistComponent},
  {path:'donorregister',component:DonorregisterComponent},
  {path:'auth',component:AuthService},
  {path:'listrequest/:id',component:ViewrequestComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'list-requestcontribution/:id',component:ListRequestContributionComponent},
  {path:'view-requestor-video/:requestId',component:ViewRequestorVideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
