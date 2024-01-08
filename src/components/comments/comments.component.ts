import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Post } from '../../models/post';
import { Comment } from '../../models/comment';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];
  @Input() postId!: string;
    newComment: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadCommentsForPost();
  }

  loadCommentsForPost(): void {
    this.comments = [];
    
    if (this.postId) {
      this.apiService.getCommentsByPostId(this.postId).subscribe(comments => {
        this.comments = comments;
        console.log(`Comentários para o post ${this.postId}:`, comments);
      });
    }
  }
}