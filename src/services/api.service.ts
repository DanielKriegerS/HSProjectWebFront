import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
