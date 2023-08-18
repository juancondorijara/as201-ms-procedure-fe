import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';
import { IProcedure } from './models/procedure.model';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  private url: string = environment.procedureapi;
  procedureSelected: IProcedure | undefined;

  constructor(
    private http: HttpClient
  ) {}

  listAll() {
    return this.http.get(this.url);
  }

  listByBatchNull() {
    return this.http.get(this.url + '/null/');
  }

  listByBatchNotNull() {
    return this.http.get(this.url + '/notnull/');
  }

  listById(id: number) {
    return this.http.get(this.url + '/id/'+ id);
  }

  listByPhaseId(phase_id: number) {
    return this.http.get(this.url + '/phase_id/'+ phase_id);
  }
  
  create(procedure: IProcedure) {
    return this.http.post(this.url, procedure);
  } 

  update(procedure: IProcedure) {
    return this.http.put(this.url, procedure);
  }

  notificationByEmail(institutionalEmail: string | undefined) {
    return this.http.post(this.url + '/notification/'+ institutionalEmail,'');
  }

  notification(procedure: IProcedure) {
    return this.http.post(this.url + '/notification2', procedure);
  }

  notification3(institutionalEmail: string | undefined, message: string | undefined) {
    //return this.http.post(this.url + '/notification3/'+ institutionalEmail, message);
    return this.http.post(this.url + '/springnotification/'+ institutionalEmail, message);
  }

  consolidate(id: number | undefined) {
    return this.http.post(this.url + '/consolidateuno/'+ id,'');
  }

  consolidate4(id1: number | undefined, id2: number | undefined, id3: number | undefined) {
    return this.http.post(this.url + '/consolidate4/'+ id1 + '-' + id2 + '-' + id3, '');
  }

  consolidate5(id1: number | undefined, id2: number | undefined, id3: number | undefined, id4: number | undefined, id5: number | undefined) {
    return this.http.post(this.url + '/consolidate5/'+ id1 + '-' + id2 + '-' + id3 + '-' + id4 + '-' + id5, '');
  }

  consolidate6(id1: number | undefined, id2: number | undefined, id3: number | undefined, id4: number | undefined, id5: number | undefined) {
    return this.http.post(this.url + '/consolidate6/'+ id1 + '-' + id2 + '-' + id3 + '-' + id4 + '-' + id5, '');
  }

}
