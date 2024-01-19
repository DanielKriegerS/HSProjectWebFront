import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-basic-info',
  templateUrl: './user-basic-info.component.html',
  styleUrl: './user-basic-info.component.css'
})
export class UserBasicInfoComponent implements OnInit{
  @Input() user!: User ;
  ngOnInit(): void {
  }
}
