import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-contact-info',
  templateUrl: './user-contact-info.component.html',
  styleUrls: ['./user-contact-info.component.css']
})
export class UserContactInfoComponent implements OnInit {
  @Input() user!: User;
  @Input() modoEdicao!: boolean;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  atualizarInformacoes(): void {
    const dadosAtualizados = {
      phone: this.user.phone,
      address: this.user.address,
      email: this.user.email
    };

    this.userService.updateUser(this.user.id, dadosAtualizados).subscribe(
      (usuarioAtualizado) => {
        console.log('Informações de contato atualizadas com sucesso:', usuarioAtualizado);
      },
      (error) => {
        console.error('Erro ao atualizar informações de contato:', error);
      }
    );
  }
}
