import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Post } from '../../models/post';
import { User } from '../../models/user';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

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
      this.apiService.getPostsByUserId(this.user.id).subscribe(
        posts => {
          this.posts = posts;
          console.log('Posts loaded successfully:', this.posts);
          console.log(this.posts); 
          console.log(this.posts ? this.posts.length : 'Array is undefined');
          
        },
        error => {
          console.error('Error loading posts:', error);
        }
      );
    } else {
      console.warn('No user or user id found.');
    }
  }
  

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
}
