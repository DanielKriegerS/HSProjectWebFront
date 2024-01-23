import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrl: './user-display.component.css'
})
export class UserDisplayComponent implements OnInit{

  @Input()userId!: string;
  user!: User ;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.userService.getUserById(this.userId).subscribe(
      (user: User) => {
        this.user = user;
      },
      (error) => {
        console.error('Erro ao buscar detalhes do usuário:', error);
      }
    );
  }

  formatPhone(telefone: number): string {
    const telefoneString = telefone.toString();
    // (00)00000-0000
    return telefoneString.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');
  }

  faEdit = faEdit;
}
