import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrl: './user-display.component.css'
})
export class UserDisplayComponent implements OnInit{

  

  @Input()userId!: string;
  user!: User ;

  constructor(private apiService:ApiService) {}

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.apiService.getUserById(this.userId).subscribe(
      (user: User) => {
        this.user = user;
      },
      (error) => {
        console.error('Erro ao buscar detalhes do usuário:', error);
      }
    );
  }

}
