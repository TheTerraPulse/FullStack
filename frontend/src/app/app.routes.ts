import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AboutUsComponent } from './pages/about-us-page/about-us-page.component';

export const routes: Routes = [
    { 
        path : '', 
        component: LandingPageComponent
    },
    {
        path: 'about', 
        component: AboutUsComponent
    },
];
