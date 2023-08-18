import { Pipe, PipeTransform } from '@angular/core';
import { IStudent } from '../services/models/student.model';

@Pipe({
  name: 'fullnameStudent'
})
export class FullnameStudentPipe implements PipeTransform {

  transform(value: IStudent, ...args: unknown[]): string {
    return value.person_name + '';
  }
}
