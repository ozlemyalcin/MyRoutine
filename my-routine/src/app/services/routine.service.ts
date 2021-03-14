import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Routine } from '../routine/routine';
import { Observable } from 'rxjs';
import { RoutineListResponseModel } from '../models/routineListResponseModel';


@Injectable(
  {providedIn:'root'}
  )

export class RoutineService {
  routines: any;
 

  constructor(private http: HttpClient) { }
  path="http://localhost:3000/routines";

  getCategories(categoryId): Observable<Routine[]>{
    let newPath=this.path;
    if (categoryId){
      newPath +="?categoryId="+categoryId
    }
  


    return this.http.get<Routine[]>(newPath);
    }
  

    getRoutines():Observable<Routine[]>{
      
      return this.http.get<Routine[]>(this.path);
    
    }

    deleteRoutine(routine:Routine):Observable<Routine>{
       return this.http.delete<Routine>(this.path+'/delete'+routine.id)
    }


   /* deleteRoutine(routine:Routine){
      this.routineService.deleteRoutine(routine).subscribe((response)=>
        this.routines.splice(this.routines.findIndex((response)=>response.id==routine.id),1));
      
}*/

   
    
  }
  



  