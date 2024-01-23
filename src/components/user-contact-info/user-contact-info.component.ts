import { Component, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-contact-info',
  templateUrl: './user-contact-info.component.html',
  styleUrls: ['./user-contact-info.component.css']
})
export class UserContactInfoComponent  {
  @Input() user!: User;
  @Input() modoEdicao!: boolean;

  formatPhone(telefone: number): string {
    if (telefone == null ){
      return 'Não informado';
    }
      const telefoneString = telefone.toString();
      // (00)00000-0000
      return telefoneString.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');
    
  }

}
