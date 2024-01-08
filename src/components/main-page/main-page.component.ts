import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ApiService } from '../../services/api.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  post!: Post;
  users: User[] = [];
  userPostsMap: Map<string, Post[]> = new Map<string, Post[]>(); 

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.apiService.getAllUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      this.loadPostsForUsers();
      },
      (error) => {
        console.error('Erro ao buscar todos os usuários:', error);
      }
    );
    }
    
    loadPostsForUsers() {
      for (const user of this.users) {
        this.apiService.getPostsByUserId(user.id).subscribe(
          (posts: Post[]) => {
            this.userPostsMap.set(user.id, posts);
            console.log(`Posts do usuário ${user.id}:`, posts);
          },
          (error) => {
            console.error(`Erro ao carregar posts do usuário ${user.id}:`, error);
          }
        );
    }
}
}

