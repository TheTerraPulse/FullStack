import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'submit-page',
  standalone: true,
  imports: [],
  templateUrl: './submit-page.component.html',
  styleUrl: './submit-page.component.scss'
})
export class SubmitPageComponent {
  constructor(private router : Router){}

  goToHomePage(){
    this.router.navigate([''])
      .then(r => console.log(r), err => console.log(err));
  }
}
