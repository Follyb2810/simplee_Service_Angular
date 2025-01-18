import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 name:string=''
 loginObj:any = {
  email:'',
  password:''
 }
 router = inject(Router)
 onLogin(){
  console.log(this.loginObj)
  if(this.loginObj.email == 'admin@gmail.com' && this.loginObj.password =='1234567'){
    this.router.navigateByUrl('/client')
    localStorage.setItem('auth',this.loginObj.email)
  }else{
    alert('Wrong credential')
  }
 }
 onChangeHandler(event: KeyboardEvent): void {
  const input = event.target as HTMLInputElement;
  console.log('Current Value:', input.value);
  console.log('Key Code:', event.key); 
  console.log('Key event:', event.key); 
  console.log('Key input:', event); 
}

}
