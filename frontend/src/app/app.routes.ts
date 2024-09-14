import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { SubmitPageComponent } from "./pages/submit-page/submit-page.component";
import { AboutUsComponent } from './pages/about-us-page/about-us-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'submit-page',
    component: SubmitPageComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
