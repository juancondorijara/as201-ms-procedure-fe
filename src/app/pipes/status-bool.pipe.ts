import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusBool'
})
export class StatusBoolPipe implements PipeTransform {

  transform(value: any): any {
    return value ? 'Activo': 'Inactivo';
  }
}
