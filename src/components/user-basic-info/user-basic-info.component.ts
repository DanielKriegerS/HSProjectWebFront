import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-basic-info',
  templateUrl: './user-basic-info.component.html',
  styleUrls: ['./user-basic-info.component.css']
})
export class UserBasicInfoComponent implements OnInit {
  @Input() user!: User;
  @Input() modoEdicao!: boolean;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  atualizarInformacoes(): void {
    const dadosAtualizados = {
      userName: this.user.userName,
    };

    this.userService.updateUser(this.user.id, dadosAtualizados).subscribe(
      (usuarioAtualizado) => {
        console.log('Usuário básico atualizado com sucesso:', usuarioAtualizado);
      },
      (error) => {
        console.error('Erro ao atualizar usuário básico:', error);
      }
    );
  }
}
