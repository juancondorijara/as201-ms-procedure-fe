import { Pipe, PipeTransform } from '@angular/core';
import { IPerson } from '../services/models/person.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: IPerson[], filterText: string) {
    console.log("Filter pipe called");
    if (data.length === 0 || filterText === '') {
      return data;
    } else {
      return data.filter(
        (person) => {
          return person.password === filterText;
        }
      );
    }
  }
}
