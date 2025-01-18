import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../model/interface/roles.types';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  url='https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation';
  constructor(private http:HttpClient) { }
  
  getDesignation():Observable<IApiResponse>{
   return  this.http.get<IApiResponse>(this.url)
  }
}
