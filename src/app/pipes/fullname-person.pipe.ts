import { Pipe, PipeTransform } from '@angular/core';
import { IPerson } from '../services/models/person.model';

@Pipe({
  name: 'fullnamePerson'
})
export class FullnamePersonPipe implements PipeTransform {

  transform(value: IPerson): string {
    return value.lastname + ', '+ value.name;
  }

}
