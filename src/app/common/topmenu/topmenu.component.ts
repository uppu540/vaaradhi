import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss']
})
export class TopmenuComponent implements OnInit {
  @Input() type: any = '';
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

    // $('#primary-menu').on('click', 'li', function (event: any) {
    //   alert('hello');
    // });
    

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
