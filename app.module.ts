import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { AppComponent } from './src/app/app.component';
import { MainPageComponent } from './src/components/main-page/main-page.component';
import { PostsComponent } from './src/components/posts/posts.component';
import { CommentsComponent } from './src/components/comments/comments.component';
import { ReactionsComponent } from './src/components/reactions/reactions.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing-module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserDisplayComponent } from './src/components/user-display/user-display.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './src/components/navbar/navbar.component';
import { LoginDisplayComponent } from './src/components/login-display/login-display.component';
import { LoginPageComponent } from './src/components/login-page/login-page.component';
import { RegisterPageComponent } from './src/components/register-page/register-page.component';
import { ProfilePageComponent } from './src/components/profile-page/profile-page.component';
import { UserBasicInfoComponent } from './src/components/user-basic-info/user-basic-info.component';
import { UserContactInfoComponent } from './src/components/user-contact-info/user-contact-info.component';
import { SaveButtonComponent } from './src/components/save-button/save-button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PostsComponent,
    CommentsComponent,
    NavbarComponent,
    LoginPageComponent,
    LoginDisplayComponent,
    UserDisplayComponent,
    RegisterPageComponent,
    ProfilePageComponent,
    UserBasicInfoComponent,
    UserContactInfoComponent,
    SaveButtonComponent,
    ReactionsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    NgxMaskDirective,
    ReactiveFormsModule
  ],
  providers: [provideNgxMask({ })],
  bootstrap: [AppComponent]
})
export class AppModule { }
