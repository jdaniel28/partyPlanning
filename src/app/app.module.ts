import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { appRoutes } from 'src/app/routerConfig';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { VenueComponent } from './venue/venue.component';
import { VenueDisplayComponent } from './venue-display/venue-display.component';
import { PopperDirective } from './popper.directive';
import { ScheduleComponent } from './schedule/schedule.component';
import { DisplayScheduleComponent } from './display-schedule/display-schedule.component';
import { UserScheduleComponent } from './user-schedule/user-schedule.component';
import { ApproveBookingComponent } from './approve-booking/approve-booking.component';
import { CreateInviteComponent } from './create-invite/create-invite.component';
import { UserInviteComponent } from './user-invite/user-invite.component';
import { ReviewComponent } from './review/review.component';
import { DiaplayUsercontactlistComponent } from './diaplay-usercontactlist/diaplay-usercontactlist.component';
import { UserContactlistComponent } from './user-contactlist/user-contactlist.component';
import { HelpComponent } from './help/help.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignUpComponent,
    LoginComponent,
    ProfileComponent,
    VenueComponent,
    VenueDisplayComponent,
    PopperDirective,
    ScheduleComponent,
    DisplayScheduleComponent,
    UserScheduleComponent,
    ApproveBookingComponent,
    CreateInviteComponent,
    UserInviteComponent,
    ReviewComponent,
    DiaplayUsercontactlistComponent,
    UserContactlistComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
