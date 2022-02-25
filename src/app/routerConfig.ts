import { Routes } from '@angular/router';
import { AddFeedbackQuestionsComponent } from './add-feedback-questions/add-feedback-questions.component';
import { ApproveBookingComponent } from './approve-booking/approve-booking.component';
import { CreateInviteComponent } from './create-invite/create-invite.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiaplayUsercontactlistComponent } from './diaplay-usercontactlist/diaplay-usercontactlist.component';
import { DisplayFeedbackComponent } from './display-feedback/display-feedback.component';
import { DisplayScheduleComponent } from './display-schedule/display-schedule.component';
import { HelpComponent } from './help/help.component';
import { InviteContactListComponent } from './invite-contact-list/invite-contact-list.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ReviewComponent } from './review/review.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserContactlistComponent } from './user-contactlist/user-contactlist.component';
import { UserInviteComponent } from './user-invite/user-invite.component';
import { UserScheduleComponent } from './user-schedule/user-schedule.component';
import { VenueDisplayComponent } from './venue-display/venue-display.component';
import { VenueComponent } from './venue/venue.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { ViewInviteesComponent } from './view-invitees/view-invitees.component';



export const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'signUp', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'venue', component: VenueComponent },
    { path: 'viewVenue', component: VenueDisplayComponent },
    { path: 'addSchedule', component: ScheduleComponent },
    { path: 'displaySchedule', component: DisplayScheduleComponent },
    { path: 'userSchedule', component: UserScheduleComponent },
    { path: 'approveBooking', component: ApproveBookingComponent },
    { path: 'createInvite', component: CreateInviteComponent },
    { path: 'userInvite', component: UserInviteComponent },
    { path: 'help', component: HelpComponent },
    { path: 'review', component: ReviewComponent },
    { path: 'userContacts', component: UserContactlistComponent },
    { path: 'displayUserContacts', component: DiaplayUsercontactlistComponent },
    { path: 'inviteContacts', component: InviteContactListComponent },
    { path: 'viewBookings', component: ViewBookingComponent },
    { path: 'displayFeedback', component: DisplayFeedbackComponent },
    { path: 'displayInvitees', component: ViewInviteesComponent },
    { path: 'editFeedback', component: AddFeedbackQuestionsComponent },
    { path: 'dashboard', component: DashboardComponent }

];