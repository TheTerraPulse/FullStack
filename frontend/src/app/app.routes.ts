import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AboutUsComponent } from './pages/about-us-page/about-us-page.component';
import { DiscrepancyPageComponent } from "./pages/discrepancy-page/discrepancy-page.component";

export const routes: Routes = [
    {
        path : '',
        component: LandingPageComponent
    },
    {
        path: 'result',
        component: DiscrepancyPageComponent
    },
    {
        path: 'about',
        component: AboutUsComponent
    },
];
