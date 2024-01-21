import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  updateUser(userId: string, updatedUserData: any): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${userId}`, updatedUserData);
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
