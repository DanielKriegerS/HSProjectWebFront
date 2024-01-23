import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080';
  private updateUserSubject = new Subject<void>();

  constructor(private http: HttpClient) { }

  updateUser(userId: string, updatedUserData: any): Observable<User> {
    const updateUserObservable = this.http.put<User>(`${this.apiUrl}/users/${userId}`, updatedUserData);

    updateUserObservable.subscribe(() => {
      this.updateUserSubject.next();
    });

    return updateUserObservable;
  }

  getUpdateUserObservable() {
    return this.updateUserSubject.asObservable();
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${userId}`);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  
  registerUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/register`, userData);
  }
  
}
