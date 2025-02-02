export interface IRole  {
    roleId:number
    role:string
}
export interface IDesignation  {
    designationId:number
    designation:string
}
export interface IApiResponse {
    message:string,
    result:boolean,
    data:any
}

export interface IEmployee {
 empName:string   
 empCode:string   
 empEmailId:string   
 empDesignation:string   
 empId:number;
 role:string 
}

export interface IClientProject {
    empName:string;
    empId:number;
    empCode:string   
    empEmailId:string   
    empDesignation:string
    projectName:string;
    startDate:Date
    expextedEndDate:Date
    clientName:string;
    clientProjectId:string;
}

