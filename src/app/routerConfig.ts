import { Routes } from '@angular/router';
import { ApproveBookingComponent } from './approve-booking/approve-booking.component';
import { DisplayScheduleComponent } from './display-schedule/display-schedule.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserScheduleComponent } from './user-schedule/user-schedule.component';
import { VenueDisplayComponent } from './venue-display/venue-display.component';
import { VenueComponent } from './venue/venue.component';



export const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'signUp', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'venue', component: VenueComponent },
    { path: 'viewVenue', component: VenueDisplayComponent },
    { path: 'addSchedule', component: ScheduleComponent },
    { path: 'displaySchedule', component: DisplayScheduleComponent },
    { path: 'userSchedule', component: UserScheduleComponent },
    { path: 'approveBooking', component: ApproveBookingComponent }
];