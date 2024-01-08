import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Post } from '../../models/post';
import { User } from '../../models/user';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() user!: User;
  posts: Post[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    if (this.user && this.user.id) {
      this.apiService.getPostsByUserId(this.user.id).subscribe(posts => {
        this.posts = posts;
        console.log('Lista de posts do usuário:', this.posts);
      });
    }
  }
}
