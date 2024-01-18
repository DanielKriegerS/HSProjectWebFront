import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './src/components/main-page/main-page.component';
import { LoginPageComponent } from './src/components/login-page/login-page.component';

const routes: Routes = [
  { path: ' ', component: MainPageComponent },
  { path: 'login', component: LoginPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }