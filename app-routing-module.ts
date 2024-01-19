import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './src/components/main-page/main-page.component';
import { LoginPageComponent } from './src/components/login-page/login-page.component';
import { RegisterPageComponent } from './src/components/register-page/register-page.component';
import { ProfilePageComponent } from './src/components/profile-page/profile-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'profile/:id', component: ProfilePageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }