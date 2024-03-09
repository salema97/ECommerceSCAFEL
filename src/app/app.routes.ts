import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'admin', component: AdminComponent },
];
