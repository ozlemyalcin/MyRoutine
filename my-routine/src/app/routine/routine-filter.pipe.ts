import { Pipe, PipeTransform } from '@angular/core';
import { Routine } from './routine';

@Pipe({
  name: 'routineFilter'
})
export class RoutineFilterPipe implements PipeTransform {

  transform(value: Routine[], filterText?: string): Routine[] {
    filterText=filterText?filterText.toLocaleLowerCase():null





    return filterText?value.filter((p:Routine)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
