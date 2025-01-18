import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IApiResponse, IDesignation } from '../../model/interface/roles.types';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
 masterService = inject(MasterService)
 designationList : IDesignation[]  = [];
 isLoading:boolean = true;
 ngOnInit(): void {
   this.masterService.getDesignation().subscribe((res:IApiResponse)=>{
    this.designationList = res.data;
    this.isLoading= false
  },error=>{
    alert("Api Error" );
    this.isLoading= false
   })
 }
}
