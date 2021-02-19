import { Injectable } from '@angular/core';
import alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(confirmMessage:string, successMessage:string,errorMessage){
    alertify.confirm(confirmMessage,
    function(){
      alertify.success(successMessage);
    },
    function(){
      alertify.error(errorMessage);
    });
    
  }
}
