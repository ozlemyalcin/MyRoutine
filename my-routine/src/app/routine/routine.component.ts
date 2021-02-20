import { Component, OnInit } from '@angular/core';
import { Routine } from './routine';
import {AlertifyService} from '../services/alertify.service'
import { RoutineService } from '../services/routine.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.css'],
  providers: [RoutineService]
})
export class RoutineComponent implements OnInit {

  constructor(private alertifyService:AlertifyService,
    private routineService:RoutineService,
    private activatedRoute:ActivatedRoute) { }

  title=" My Routine"
  filterText=""
  

  routines: Routine[];
 

  

  ngOnInit() {

    this.activatedRoute.params.subscribe(params=>{
      this.routineService.getRoutines(params["categoryId"]).subscribe(data=>{
        this.routines=data
      });
  

    })



}


addToScore(score){
''
 this.alertifyService.confirm('onfirmmesg','sucess','error');
  
  

}
}