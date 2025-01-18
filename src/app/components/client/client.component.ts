import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { IApiResponse } from '../../model/interface/roles.types';
import { AsyncPipe, CommonModule, JsonPipe, UpperCasePipe} from '@angular/common';
import { Observable } from 'rxjs';
import { AlertComponent } from '../../reussableComponent/alert/alert.component';
import { ButtonComponent } from '../../reussableComponent/button/button.component';

@Component({
  selector: 'app-client',
  imports: [FormsModule,CommonModule,UpperCasePipe,JsonPipe,AsyncPipe,AlertComponent,ButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();
  clientList: Client[] = [];
  userList$:Observable<any>=new Observable<any>
  constructor(private client:ClientService){}
  ngOnInit(): void {
    // this.onSaveClient();
    this.loadClient();
    this.userList$ = this.client.getAllUser()
  }
  loadClient(){
    this.client.getAllClient().subscribe((res:IApiResponse)=>{
      this.clientList = res.data
    },error =>{
      alert(error)
      console.log(error)
    })
  }
  getAllEmployee(){}
  loadUser(){
    this.client.getAllUser().subscribe((res:any)=>{})
  }
  
  onSaveClient(data:string) {
    console.log(data)
    this.client.addUpdate(this.clientObj).subscribe((res:IApiResponse)=>{
      if(res.result){
        alert("Client created success")
        this.loadClient();
        this.clientObj = new Client();
      }else{
        alert(res.message)
      }
    })
  }
  onDelete(id:number){
    const isDelete = confirm(`Are you sure you want to delete client with ID: ${id}`);
    if(isDelete){
      this.client.deleteClient(id).subscribe((res:IApiResponse)=>{
        if(res.result){
          alert("Client delete")
          this.loadClient()
        }else{
          alert(res.message)
        }
      })
    }
  }
  onEdit(data:Client){
    this.clientObj = data;
  }
}
