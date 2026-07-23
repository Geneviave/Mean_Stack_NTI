import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home.component';
import { AboutPageComponent } from './about/about.component';
import { ContactPageComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfileComponent } from './profile/profile.component';
import {DashboardComponent} from './dashboard/dashboard.component'
export const routes: Routes = [
    {path: '' , component : HomePageComponent} ,
    {path: 'about' , component : AboutPageComponent} ,
    {path: 'contact' , component : ContactPageComponent} ,
    {path: 'courses' , component : CoursesComponent} ,
    {path: 'profile' , component : ProfileComponent} ,    
    {path: 'dashboard' , component: DashboardComponent}
];
