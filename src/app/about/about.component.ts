import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  type: any = 'general';
  constructor() { }

  ngOnInit(): void {
  }

  showTab(value: any){
    this.type = value;
  }


}
