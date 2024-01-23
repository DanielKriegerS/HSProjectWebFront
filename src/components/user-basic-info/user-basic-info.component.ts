import { Component, Input } from '@angular/core';
import { User } from '../../models/user';


@Component({
  selector: 'app-user-basic-info',
  templateUrl: './user-basic-info.component.html',
  styleUrls: ['./user-basic-info.component.css']
})
export class UserBasicInfoComponent  {
  @Input() user!: User;
  @Input() modoEdicao!: boolean;
  
  }
