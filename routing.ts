import {Routes} from '@angular/router';
import {LoginComponent} from 'src/app/login/login.component';
import {ManageuserComponent} from 'src/app/manageuser/manageuser.component'

export const routes:Routes = [
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
     },
     {
       path: 'managecontact',
       component:ManageuserComponent
     }
];
