import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPerson } from './models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url: string = environment.personapi;
  personSelected: IPerson | undefined;

  constructor(private http: HttpClient) {}

  listAll() {
    return this.http.get(this.url);
  }

  listById(id: number) {
    return this.http.get(this.url+'/id/'+id);
  }

  listByStatus(active: boolean) {
    return this.http.get(this.url+'/active/'+active);
  }

  create(data: any) {
    return this.http.post(this.url, data);
  }

  update(data: any) {
    return this.http.put(this.url, data);
  }

  deleteById(id: number) {
    return this.http.delete(this.url+'/delete/'+id);
  }

  restoreById(id: number) {
    return this.http.delete(this.url+'/restore/'+id);
  }
}
