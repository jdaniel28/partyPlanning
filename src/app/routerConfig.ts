import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VenueDisplayComponent } from './venue-display/venue-display.component';
import { VenueComponent } from './venue/venue.component';



export const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'signUp', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'venue', component: VenueComponent },
    { path: 'viewVenue', component: VenueDisplayComponent }
];