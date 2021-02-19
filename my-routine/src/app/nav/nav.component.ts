import { Component, OnInit } from '@angular/core';
//import { url } from 'inspector';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  imagepath="~/images/my.jpeg";

  ngOnInit() {
  }

}
