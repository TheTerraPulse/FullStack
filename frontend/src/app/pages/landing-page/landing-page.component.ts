import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']  // Fix here: styleUrls (plural)
})
export class LandingPageComponent implements OnInit {

  names: string[] = ["Save the PLANET", "Save the FUTURE"];
  currentText: string = '';  // Properly initialize currentText

  items: any | undefined;

  ngOnInit() {
    // Navbar items
    this.items = [
      { label: 'Home', icon: 'pi pi-home' },
      { label: 'File a form', icon: 'pi pi-book' },
      { label: 'About us', icon: 'pi pi-info-circle' },
      { label: 'Contact', icon: 'pi pi-envelope' }
    ];

    // Set the initial text
    this.currentText = this.names[0];

    // Change the text every 5 seconds
    let index = 0;
    setInterval(() => {
      index =  Math.floor(Math.random() * this.names.length);
      console.log(index);
      this.currentText = this.names[index];
    }, 2000);
  }
}
