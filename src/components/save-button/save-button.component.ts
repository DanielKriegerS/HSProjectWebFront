import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SharedEventsService } from '../../services/shared-events.service';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.css']
})
export class SaveButtonComponent implements OnInit {
  @Input() modoEdicao: boolean = false;
  @Input() userForm!: FormGroup;
  @Input() user!: User;

  constructor(
    private userService: UserService,
    private sharedEvents: SharedEventsService
  ) {}

  ngOnInit(): void {
    this.sharedEvents.modoEdicaoChange.subscribe((newModoEdicao: boolean) => {
      this.modoEdicao = newModoEdicao;
    });
  }

  onSaveClick(): void {
    if (this.userForm.valid && this.modoEdicao) {
      this.userService.updateUser(this.userForm.value.id, this.userForm.value).subscribe(
        () => {
          console.log('Usuário atualizado com sucesso.');
          this.sharedEvents.modoEdicaoChange.emit(false);
        },
        (error) => {
          console.error('Erro ao atualizar usuário:', error);
        }
      );
    } else {
      this.sharedEvents.modoEdicaoChange.emit(!this.modoEdicao);
    }
  }
}
