import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-page',
  standalone: true,
  imports: [],
  templateUrl: './submit-page.component.html',
  styleUrl: './submit-page.component.scss'
})
export class SubmitPageComponent {
  constructor(private router : Router){}

  goToHomePage(){
    this.router.navigate(['/']);
  }
}
