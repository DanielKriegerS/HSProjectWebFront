import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user'; 
import { Post } from '../models/post';
import { Comment } from '../models/comment';
import { Reaction } from '../models/reaction';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  addComment(newComment: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/comments`, { body: newComment });
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`);
  }

  getCommentsByPostId(postId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/comments/commentsByPostId/${postId}`);
  }

}
