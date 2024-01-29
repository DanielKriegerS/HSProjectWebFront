import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
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
  creatingPost: boolean = false;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();

    this.postService.creatingPost$.subscribe((creatingPost) => {
      this.creatingPost = creatingPost;
    });
  }

  loadPosts(): void {
   if (this.user && this.user.id) {
      this.postService.getPostsByUserId(this.user.id).subscribe(
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
