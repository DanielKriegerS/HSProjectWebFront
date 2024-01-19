import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  users: User[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.apiService.getAllUsers().subscribe(
      (users: User[]) => {
        this.users = users.filter(user => user.userName !== null);
      },
      (error) => {
        console.error('Erro ao buscar todos os usuários:', error);
      }
    );
  }
}
