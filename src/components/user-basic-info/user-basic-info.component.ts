import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedEventsService } from '../../services/shared-events.service';

@Component({
  selector: 'app-user-basic-info',
  templateUrl: './user-basic-info.component.html',
  styleUrls: ['./user-basic-info.component.css']
})
export class UserBasicInfoComponent  {
  @Input() user!: User;
  @Input() modoEdicao!: boolean;
  @Input() userForm!: FormGroup;

  constructor(private fb: FormBuilder, private sharedEvent: SharedEventsService) {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      userLogin: ['', Validators.required],
      age: ['', Validators.required],
      
    });
  }

  onModoEdicaoChange(): void {
    this.sharedEvent.modoEdicaoChange.emit(!this.modoEdicao);
  }
  
  }
