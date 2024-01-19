import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  user: User = {} as User;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = params['id'];

      this.apiService.getUserById(userId).subscribe(
        (userData: User) => {
          this.user = userData;
        },
        (error) => {
          console.error('Erro ao obter informações do usuário:', error);
        }
      );
    });
  }
}
