import { Component, Input, SimpleChanges } from '@angular/core';
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['modoEdicao'] && changes['modoEdicao'].currentValue === false) {
      this.reloadUserInfo();
    }
  }

  onModoEdicaoChange(): void {
    this.sharedEvent.modoEdicaoChange.emit(!this.modoEdicao);
  }

  private reloadUserInfo(): void {
    const userName = this.userForm.get('userName')?.value;
    const userLogin = this.userForm.get('userLogin')?.value;
    const age = this.userForm.get('age')?.value;

    this.user = {
      ...this.user,
      userName: userName,
      userLogin: userLogin,
      age: age
    };
  }
}