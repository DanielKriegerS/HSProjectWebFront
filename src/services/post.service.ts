import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8080';
  private creatingPostSubject = new BehaviorSubject<boolean>(false);

  creatingPost$ = this.creatingPostSubject.asObservable();

  constructor(private http: HttpClient) {}  
  
  startCreatingPost(): void {
    this.creatingPostSubject.next(true);
  }

  cancelCreatingPost(): void {
    this.creatingPostSubject.next(false);
  }
  
  getPostsByUserId(userId: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts/user/${userId}`);
  }

  createPost(newPost: Post): Observable<Post> {
    console.log('Novo post a ser criado:', newPost);
    return this.http.post<Post>(`${this.apiUrl}/posts`, newPost);
  }
}
