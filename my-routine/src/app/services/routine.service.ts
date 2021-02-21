import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Routine } from '../routine/routine';
import { Observable } from 'rxjs';

@Injectable()

export class RoutineService {

  constructor(private http: HttpClient) { }
  path="http://localhost:3000/routines";

  getRoutines(categoryId): Observable<Routine[]>{
    let newPath=this.path;
    if (categoryId){
      newPath +="?categoryId="+categoryId
    }



    return this.http.get<Routine[]>(newPath
    );
    }

  }

