import { Injectable } from '@angular/core';
//import alertify from 'alertifyjs';
declare let alertify: any;

@Injectable()
export class AlertifyService {

  constructor() { }

  
    
  confirmMessage(confirmMessage:string, successMessage:string, errorMessage:string){
    alertify.confirm(confirmMessage,
    function(){
      alertify.success(successMessage);
    },
    function(){
      alertify.error(errorMessage);
    });

   }
  }

