import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { environment } from '../../environments/environment';
import { IApiResponse } from '../model/interface/roles.types';
import { Constant } from '../constant';

@Injectable({
  providedIn: 'root'
})

// ng g environments
export class ClientService {
  url=environment.API_URL 
   constructor(private http:HttpClient) { }
  
  getAllClient():Observable<IApiResponse>{
    return this.http.get<IApiResponse>(this.url+Constant.API_METHOD.GET_ALL_CLIENT)
  }
  getAllEmployee():Observable<IApiResponse>{
    return this.http.get<IApiResponse>(this.url+Constant.API_METHOD.GET_ALL_EMP)
  }
  getAllClientProject():Observable<IApiResponse>{
    return this.http.get<IApiResponse>(this.url+Constant.API_METHOD.GET_ALL_PROJECT)
  }
  addUpdate(body:Client):Observable<IApiResponse>{
    return this.http.post<IApiResponse>(this.url +'AddUpdateClient',body)
  }
  deleteClient(id:number):Observable<IApiResponse>{
    return this.http.delete<IApiResponse>(this.url+`${Constant.API_METHOD.DELETE_CLIENT}=${id}`)
  }
  addClientProject(body:Client):Observable<IApiResponse>{
    return this.http.post<IApiResponse>(this.url +Constant.API_METHOD.ADD_CLIENT_PROJECT,body)
  }
  getAllUser(){
    return this.http.get(Constant.API_METHOD.GET_ALL_USER)
  }
}
