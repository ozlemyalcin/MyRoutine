import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import { RoutineComponent } from './routine/routine.component';
import {CategoryComponent} from './category/category.component';
import { RoutineListComponent } from './routine-list/routine-list.component';



const routes: Routes=[
{path:'', component:RoutineComponent},
   
{path:'routines/delete', component:RoutineListComponent},







{path:'routines/category/:categoryId', component:RoutineComponent},






];


export const appRoutingModule = RouterModule.forRoot(routes);

@NgModule({
  
  
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
