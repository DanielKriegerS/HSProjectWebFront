import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}
  getPostsByUserId(userId: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts/user/${userId}`);
  }

  createPost(newPost: Post): Observable<Post> {
    console.log(newPost)
    return this.http.post<Post>(`${this.apiUrl}/posts`, newPost);
  }
}
