


import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Category } from '../category/category';
import { Observable } from 'rxjs';
import { RoutineListComponent } from '../routine-list/routine-list.component';
import { RoutineListResponseModel } from '../models/routineListResponseModel';

@Injectable()

export class CategoryService {
 
  constructor(private http: HttpClient) { }
  path="http://localhost:3000/categories";

  getCategories(categoryId): Observable<Category[]>{
    return this.http.get<Category[]>(this.path);
    }

 

  }
 