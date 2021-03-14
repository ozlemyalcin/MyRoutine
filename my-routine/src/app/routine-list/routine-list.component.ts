import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../category/category';

import { RoutineListResponseModel } from '../models/routineListResponseModel';
import { Routine } from '../routine/routine';
import { RoutineService } from '../services/routine.service';

@Component({
  selector: 'app-routine-list',
  templateUrl: './routine-list.component.html',
  styleUrls: ['./routine-list.component.css']
})
export class RoutineListComponent implements OnInit {

  routines: Routine[] = [];

  




  constructor(private routineService: RoutineService) { }


  ngOnInit(): void {
    this.getRoutines();
    
    


  }
  getRoutines() {
    this.routineService.getRoutines().subscribe(response => {
      this.routines = response

    });
  }

 /* 
  
  }*/

  /*deleteRoutine(routine: Routine): void {
    this.routines = this.routines.filter(h => h !== routine);
    this.routineService.deleteRoutine(routine).subscribe();
  }*/
  /*deleteRoutine(routine: Routine) {
    this.routineService.deleteRoutine(routine);
  }*/

/*deleteRoutine(routine){
  this.routineService.deleteRoutine(routine).subscribe((response)=>
        this.routines.splice(this.routines.findIndex((response)=>response.id==routine.id),1));
}*/
deleteRoutine(id){
  let index=this.routines.findIndex(e=>e.id===id);
  if(index !== -1){
    this.routines.splice(index,1)
  }

}

   
  }
