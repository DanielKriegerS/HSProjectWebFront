import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-new-post-button',
  templateUrl: './new-post-button.component.html',
  styleUrls: ['./new-post-button.component.css']
})
export class NewPostButtonComponent {

  constructor(private postService: PostService) {}

  startCreatingPost(): void {
    this.postService.startCreatingPost();
  }

  cancelCreatingPost(): void {
    this.postService.cancelCreatingPost();
  }
}
