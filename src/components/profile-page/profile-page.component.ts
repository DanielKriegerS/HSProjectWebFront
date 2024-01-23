import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent implements OnInit {
  user!: User;
  componenteAtual: string = '';
  modoEdicao: boolean = false;
  
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = params['id'];

      this.userService.getUserById(userId).subscribe(
        (userData) => {
          this.user = userData;
        },
        (error) => {
          console.error('Erro ao obter informações do usuário:', error);
        }
      );
    });

    
  }
  mostrarComponente(componente: string): void {
    this.componenteAtual = componente;
  }

  alternarModoEdicao() {
    this.modoEdicao = !this.modoEdicao;
  }
}