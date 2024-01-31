import { Component, Input, SimpleChanges } from '@angular/core';
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['modoEdicao'] && changes['modoEdicao'].currentValue === false) {
      this.reloadUserInfo();
    }
  }

  onModoEdicaoChange(): void {
    this.sharedEvent.modoEdicaoChange.emit(!this.modoEdicao);
  }

  private reloadUserInfo(): void {
    const address = this.userForm.get('address')?.value;
    const phone = this.userForm.get('phone')?.value;
    const email = this.userForm.get('email')?.value;

    this.user = {
      ...this.user,
      address: address,
      phone: phone,
      email: email
    };
  }

  formatPhone(telefone: number): string {
    if (telefone == null) {
      return 'Não informado';
    }

    const telefoneString = telefone.toString();

    if (telefoneString.length === 11 && telefoneString[2] === '9') {
      // (00)90000-0000 
      return telefoneString.replace(/(\d{2})(\d{5})(\d{4})(\d{1})/, '($1)$2-$3$4');
    } else if (telefoneString.length === 10) {
      // (00)0000-0000 
      return telefoneString.replace(/(\d{2})(\d{4})(\d{4})/, '($1)$2-$3');
    } else {
      this.userForm.get('phone')?.setErrors({ 'invalidPhone': true });
      return telefoneString;
    }
  }
}
