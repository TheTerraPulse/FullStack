import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {SubmitPageComponent} from "./pages/submit-page/submit-page.component";

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'submit-page',
    component: SubmitPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
