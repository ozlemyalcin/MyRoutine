import { Component, OnInit } from '@angular/core';
import { Routine } from './routine';
import {AlertifyService} from '../services/alertify.service';
import { RoutineService } from '../services/routine.service';
import { ActivatedRoute } from '@angular/router';

import { first } from 'rxjs/operators';

import { Category } from '../category/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RoutineListComponent } from '../routine-list/routine-list.component';
import { RoutineListResponseModel } from '../models/routineListResponseModel';






@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.css'],
  providers: [RoutineService]
})
export class RoutineComponent implements OnInit {
  
  private routines: Routine[] = [];

  constructor(private alertifyService:AlertifyService,
    private routineService:RoutineService,
    private activatedRoute:ActivatedRoute,
    private httpClient: HttpClient) {
     
  }
    

     
     
    

  title=" My Routine"
  filterText=""
 
  
path="http://localhost:3000/routines";


 

  

  ngOnInit() {

    this.activatedRoute.params.subscribe(params=>{
      this.routineService.getCategories(params["categoryId"]).subscribe(data=>{
        this.routines=data
      });
    })
    
  
    
  



}



addToAlert(routine){

 this.alertifyService.confirmMessage('confirm', 'ok', 'cancel' )


}






}