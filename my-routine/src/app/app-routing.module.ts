import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import { RoutineComponent } from './routine/routine.component';
import {CategoryComponent} from './category/category.component';

const routes: Routes=[
{path:'routines', component : RoutineComponent},
{path:'', redirectTo:'routines', pathMatch:'full'},
{path:'routines/category/:categoryId', component:RoutineComponent}

];




@NgModule({
  
  
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
