import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { RoutineComponent } from './routine/routine.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { AppRoutingModule } from './app-routing.module';
import { RoutineFilterPipe } from './routine/routine-filter.pipe';
import { AlertifyService } from './services/alertify.service';

@NgModule({
  declarations: [
    AppComponent,
    RoutineComponent,
    NavComponent,
    CategoryComponent,
    RoutineFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
