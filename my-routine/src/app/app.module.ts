import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { RoutineComponent } from './routine/routine.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { AppRoutingModule } from './app-routing.module';
import { RoutineFilterPipe } from './routine/routine-filter.pipe';
import { AlertifyService } from './services/alertify.service';
import { RoutineListComponent } from './routine-list/routine-list.component';











@NgModule({
  declarations: [
    AppComponent,
    RoutineComponent,
    NavComponent,
    CategoryComponent,
    RoutineFilterPipe,
    RoutineListComponent,

    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    

  ],
  providers: [AlertifyService
    
  
   
],


  bootstrap: [AppComponent]
})
export class AppModule { }
