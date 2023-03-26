import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss']
})
export class TopmenuComponent implements OnInit {

  routeActive: any = '';
  activeUrl = '';

  // Array
  topmenuData: any = [];


  // string
  selectedItem: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
    console.log(this.router);
    this.activeUrl = this.router.url ? this.router.url: '';
    

    this.topmenuData = [
      {
        name: 'Home',
        routerLink: '/home'
      },
      {
        name: 'About Us',
        routerLink: '/about'
      },
      {
        name: 'Contact Us',
        routerLink: '/contact'
      }
    ]

  }

  handleRoute(val: any) {
    this.routeActive = val;
  }

  clickForNavigate(item: any) {
    this.router.navigate([item.navigate]);
    this.selectedItem = item.navigate
  }

}
