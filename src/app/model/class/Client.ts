export class Client{
    clientId:number;
    contactPersonName:string;
    companyName:string;
    address:string;
    city:string;
    pincode:string;
    state:string;
    gstNo:string;
    contactNo:string;
    regNo:string;
    EmployeeStrength:number;
    constructor() {
        // super();
        this.EmployeeStrength = 0;
        this.address='';
        this.city='';
        this.clientId=0;
        this.companyName='';
        this.contactNo='';
        this.contactPersonName="";
        this.gstNo='';
        this.state='';
        this.regNo='';
        this.pincode =''
        
    }
}