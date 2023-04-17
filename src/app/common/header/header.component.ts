import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(window).scroll(function(){
      var sticky = $('.masthead'),
          scroll = $(window).scrollTop();
    
      if (scroll >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });

  }

  showMenu() {
    $('.mobile-sidebar').toggleClass('active');
  }

}
