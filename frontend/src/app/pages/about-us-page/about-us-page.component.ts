import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'about-us',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule],
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss']
})
export class AboutUsComponent implements OnInit {

  items: any | undefined;

  ngOnInit() {
    // Navbar items - same as landing page
    this.items = [
      { 
        label: 'Home', 
        icon: 'pi pi-home',
        route: '' 
      },
      { 
        label: 'File a form', 
        icon: 'pi pi-book',
        route: 'report'
      },
      { 
        label: 'About us', 
        icon: 'pi pi-info-circle',
        route: 'about' 
      },
      { 
        label: 'Contact', 
        icon: 'pi pi-envelope',
        route: 'contact' 
      }
    ];
  }
}
