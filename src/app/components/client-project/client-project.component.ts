import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { IApiResponse, IClientProject, IDesignation, IEmployee } from '../../model/interface/roles.types';
import { Client } from '../../model/class/Client';
import { DatePipe } from '@angular/common';
import { AlertComponent } from '../../reussableComponent/alert/alert.component';
import { ButtonComponent } from '../../reussableComponent/button/button.component';

@Component({
  selector: 'app-client-project',
  imports: [FormsModule,ReactiveFormsModule,DatePipe,AlertComponent,ButtonComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {
  
client = inject(ClientService);
employeeList:IEmployee[]=[]
clientList:Client[]=[]
projectList = signal<IClientProject[]>([])
name= signal("folly")
//? reactive form
 projectForm :FormGroup = new FormGroup({
  clientProjectId:new FormControl(0),
  projectName:new FormControl("",[Validators.required,Validators.minLength(4)]),
  startDate:new FormControl(""),
  expectedEndDate:new FormControl(""),
  leadByEmpId:new FormControl(""),
  completedDate:new FormControl(""),
  contactPerson:new FormControl(""),
  contactPersonContactNo:new FormControl(""),
  totalEmpWorking:new FormControl(""),
  projectCost:new FormControl(""),
  projectDetails:new FormControl(""),
  contactPersonEmailId:new FormControl(""),
  clientId:new FormControl(""),
 })
 
 ngOnInit(): void {
   this.getAllClient();
   this.getAllEmployes();
   this.getAllClientProject()
 }
 getAllClientProject(){
  this.client.getAllClientProject().subscribe((res:IApiResponse)=>{
    this.projectList.set(res.data)
  })
 }
 getAllEmployes (){
   this.client.getAllEmployee().subscribe((res:IApiResponse)=>this.employeeList = res.data)
 }
 getAllClient(){
  this.client.getAllClient().subscribe((res:IApiResponse)=>this.clientList = res.data)
 }
 onSaveProject(){
  const value = this.projectForm.value;
  this.client.addClientProject(value).subscribe((res:IApiResponse)=>{
    if(res.result){
      alert("Project created")
    }else{
      alert(res.message)
    }
  })
 }
}
