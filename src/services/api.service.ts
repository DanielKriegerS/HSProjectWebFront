import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  addComment(newComment: string): Observable<any> {
    return this.http.post<Comment>(`${this.apiUrl}/comments`, { body: newComment }, { withCredentials: true });
  }

  getCommentsByPostId(postId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/comments/commentsByPostId/${postId}`);
  }

 
  getPostsByUserId(userId: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts/user/${userId}`);
  }

  createPost(newPost: Post): Observable<Post> {
    console.log(newPost)
    return this.http.post<Post>(`${this.apiUrl}/posts`, newPost);
  }
}
