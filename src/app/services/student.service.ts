import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IStudent } from './models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url: string = environment.studentapi;

  studentSelected: IStudent | undefined;

  constructor(private http: HttpClient) { }

  listAll() {
    return this.http.get(this.url);
  }

  listById(id: number) {
    return this.http.get(this.url + '/id/' + id);
  }

  listByStatus(status: string) {
    return this.http.get(this.url + '/status/' + status);
  }

  create(student: IStudent) {
    return this.http.post(this.url, student);
  }

  update(student: IStudent) {
    return this.http.put(this.url, student);
  }

  deleteGraduated(id: number) {
    return this.http.post(this.url + '/graduated/'+ id,'');
  }

  deleteRetired(id: number) {
    return this.http.post(this.url + '/retired/'+ id,'');
  }

  restore(id: number) {
    return this.http.post(this.url + '/restore/'+ id,'');
  }
}
