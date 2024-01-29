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

  getPostsByUserId(userId: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts/user/${userId}`);
  }

  createPost(newPost: Post): Observable<Post> {
    console.log(newPost);
    return this.http.post<Post>(`${this.apiUrl}/posts`, newPost);
  }

  startCreatingPost(): void {
    this.creatingPostSubject.next(true);
  }

  cancelCreatingPost(): void {
    this.creatingPostSubject.next(false);
  }
}
