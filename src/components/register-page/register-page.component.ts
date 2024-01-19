import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.userForm = this.fb.group({
      userLogin: ['', [Validators.required]],
      passHash: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    const userData = this.userForm.value;

    this.apiService.registerUser(userData).subscribe(
      (response: any) => {
        if (response.success) {
          const currentUserId = response.userId;
          this.router.navigate(['/profile', currentUserId]);
        } else {
          console.error(response.error);
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
