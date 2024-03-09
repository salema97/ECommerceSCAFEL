import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponentAdmin } from './admin/components/dashboard/dashboard.component';
import { DashboardComponentCustomer } from './customer/components/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'admin/dashboard', component: DashboardComponentAdmin },
    { path: 'customer', component: CustomerComponent },
    { path: 'customer/dashboard', component: DashboardComponentCustomer },
];
