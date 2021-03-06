import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './design/header/header.component';
import { FooterComponent } from './design/footer/footer.component';
import { AdminloginComponent } from './core/adminlogin/adminlogin.component';
import { DonorcontributeComponent } from './core/donorcontribute/donorcontribute.component';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { DonorserviceService } from './service/donorservice.service';
import {RequestorserviceService} from './service/requestorservice.service'
import { DonortransactionComponent } from './donortransaction/donortransaction.component';
import { ListrequestComponent } from './listrequest/listrequest.component';
import { DonorloginService } from './service/donorlogin.service';
import { MydonationlistComponent } from './mydonationlist/mydonationlist.component';
import { DonorregisterComponent } from './core/donorregister/donorregister.component';
import { AuthService } from './service/auth.service';
import { ViewrequestComponent } from './core/viewrequest/viewrequest.component';
import { ForgotpasswordComponent } from './core/forgotpassword/forgotpassword.component';
import { ListRequestContributionComponent } from './core/list-request-contribution/list-request-contribution.component';
import { AvatarModule } from 'ngx-avatar';
import { ViewRequestorVideoComponent } from './view-requestor-video/view-requestor-video.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminloginComponent,
    DonorcontributeComponent,
    DonortransactionComponent,
    ListrequestComponent,
    MydonationlistComponent,
    DonorregisterComponent,
    ViewrequestComponent,
    ForgotpasswordComponent,
    ListRequestContributionComponent,
    ViewRequestorVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AvatarModule,
  ],
  providers: [DonorserviceService,RequestorserviceService,DonorloginService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
