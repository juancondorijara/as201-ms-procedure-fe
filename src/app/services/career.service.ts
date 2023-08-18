import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICareer } from './models/career.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  private url: string = environment.careerapi;
  careerSelected: ICareer | undefined;

  constructor(
    private http: HttpClient
  ) {}

  listAll(): Observable<ICareer[]> {
    return this.http.get<ICareer[]>(this.url);
  }

  listById(id: number) {
    return this.http.get(this.url+'/id/'+id);
  }

  listByStatus(active: boolean) {
    return this.http.get(this.url+'/status/'+active);
  }
}
