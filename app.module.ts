import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './src/app/app.component';
import { MainPageComponent } from './src/app/components/main-page/main-page.component';
import { PostsComponent } from './src/app/components/posts/posts.component';
import { CommentsComponent } from './src/app/components/comments/comments.component';
import { ReactionsComponent } from './src/app/components/reactions/reactions.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing-module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PostsComponent,
    CommentsComponent,
    ReactionsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
