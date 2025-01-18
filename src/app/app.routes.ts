import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { ClientComponent } from './components/client/client.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientProjectComponent } from './components/client-project/client-project.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'',
        component:LayoutComponent,
        
        children:[
            {
                path:'login',
                component:LoginComponent
            },            
            {
                path:'master',
                component:MasterComponent,
                canActivate:[authGuard],        
            },
            {
                path:'client',
                component:ClientComponent,
                canActivate:[authGuard],                
            },
            {
                path:'employee',
                component:EmployeeComponent,
                canActivate:[authGuard],
            },
            {
                path:'project',
                component:ClientProjectComponent,
                canActivate:[authGuard],
            }
        ]
    },
    // {
    //     path:'master',
    //     component:MasterComponent,

    // },
    // {
    //     path:'client',
    //     component:ClientComponent
    // },
    // {
    //     path:'employee',
    //     component:EmployeeComponent
    // },
    // {
    //     path:'project',
    //     component:ClientProjectComponent
    // },
    // {
    //     path:'login',
    //     component:LoginComponent
    // },
];
