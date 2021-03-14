import { Component } from '@angular/core';
import { Routine } from './routine/routine';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-routine';
  currentUser: any;
 
  sourceList:Routine[] ;
  displayList: Routine[];
  
  



  
  
  
  



}
