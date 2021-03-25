import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'dashboard', canActivate : [AuthGuard] ,component:DashboardComponent},
  {path:'dashboard/:userId', canActivate : [AuthGuard] , component:DashboardComponent},
  {path:'feedback', canActivate : [AuthGuard], component:FeedbackComponent},
  {path: 'homepage',component:HomePageComponent},
  {path: '',   redirectTo: '/homepage', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LoginComponent,RegistrationComponent,DashboardComponent,FeedbackComponent,HomePageComponent]
