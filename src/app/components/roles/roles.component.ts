import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IApiResponse, IRole } from '../../model/interface/roles.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
//? string,number,boolean,object,array,undefine,null,date
url='https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles';
roleList:IRole[] =[];
task:string ="Implementing Api";
objcetive="Call my mvc api"
inputType:string = "radio"
selectedState:string='';
// constructor(private http:HttpClient) {} //? old way
http = inject(HttpClient); //? new way
showMessage(message:string){
  alert(`welcome to the team of ${message}`);
}
showAlert(){
  alert("Welcomee");
}
ngOnInit(): void {
  this.getAllRole();
}
getAllRole(){
  this.http.get<IApiResponse>(this.url).subscribe((res:IApiResponse)=>{
    this.roleList = res.data
  })
}
}
