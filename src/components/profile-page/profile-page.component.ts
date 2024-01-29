import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedEventsService } from '../../services/shared-events.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  user!: User;
  componenteAtual: string = '';
  modoEdicao: boolean = false;
  @ViewChild('form') form!: NgForm;
  userForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
    private sharedEvents: SharedEventsService
  ) {
    this.userForm = this.fb.group({
      id: [''],
      userName: ['', Validators.required],
      userLogin: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const userId = params['id'];

      this.userService.getUserById(userId).subscribe(
        (userData) => {
          this.user = userData;

          this.userForm.setValue({
            id: userData.id,
            userName: userData.userName || userData.userLogin,
            userLogin: userData.userLogin,
            age: userData.age || '',
            address: userData.address || '',
            phone: userData.phone || '',
            email: userData.email || '',
          });
        },
        (error) => {
          console.error('Erro ao obter informações do usuário:', error);
        }
      );
    });

    this.sharedEvents.modoEdicaoChange.subscribe((newModoEdicao: boolean) => {
      this.modoEdicao = newModoEdicao;
    });
  }

  mostrarComponente(componente: string): void {
    this.componenteAtual = componente;
  }

  alternarModoEdicao() {
    this.sharedEvents.modoEdicaoChange.emit(!this.modoEdicao);
  }
}
