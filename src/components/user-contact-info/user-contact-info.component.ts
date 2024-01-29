import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedEventsService } from '../../services/shared-events.service';
@Component({
  selector: 'app-user-contact-info',
  templateUrl: './user-contact-info.component.html',
  styleUrls: ['./user-contact-info.component.css']
})
export class UserContactInfoComponent  {
  @Input() user!: User;
  @Input() modoEdicao!: boolean;
  @Input() userForm!: FormGroup;

  constructor(private fb: FormBuilder, private sharedEvent: SharedEventsService) {
    this.userForm = this.fb.group({
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  formatPhone(telefone: number): string {
    if (telefone == null ){
      return 'Não informado';
    }
      const telefoneString = telefone.toString();
      // (00)00000-0000
      return telefoneString.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3'); 
  }

  onModoEdicaoChange(): void {
    this.sharedEvent.modoEdicaoChange.emit(!this.modoEdicao);
  }

}
