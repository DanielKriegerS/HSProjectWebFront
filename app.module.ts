import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PostsComponent,
    CommentsComponent,
    NavbarComponent,
    UserDisplayComponent,
    ReactionsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
