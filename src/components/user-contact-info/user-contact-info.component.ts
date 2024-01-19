import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
@Component({
  selector: 'app-user-contact-info',
  templateUrl: './user-contact-info.component.html',
  styleUrl: './user-contact-info.component.css'
})
export class UserContactInfoComponent implements OnInit {
  @Input() user!: User;
  @Input() modoEdicao!: boolean;
  
  ngOnInit(): void {
  }
  
}
