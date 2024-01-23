import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import {OnInit} from '@angular/core';
@Component({
  selector: 'app-save-button',
  template: `
    <button class="btn btn-primary mb-3" (click)="onSaveClick()">
      {{ modoEdicao ? 'Salvar Alterações' : 'Editar Perfil' }}
    </button>
  `,
})
export class SaveButtonComponent implements OnInit{
  @Input() modoEdicao: boolean = false;
  @Input() user!: User;
  @Output() modoEdicaoChange = new EventEmitter<boolean>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }

  onSaveClick(): void {
    if (this.modoEdicao) {
      this.userService.updateUser(this.user.id, this.user).subscribe(
        () => {
          console.log('Usuário atualizado com sucesso.');
          this.modoEdicaoChange.emit(!this.modoEdicao);
        },
        (error) => {
          console.error('Erro ao atualizar usuário:', error);
        }
      );
    } else {
      this.modoEdicaoChange.emit(!this.modoEdicao);
    }
  }
}
