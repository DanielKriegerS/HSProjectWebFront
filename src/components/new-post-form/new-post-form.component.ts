import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.css']
})

export class NewPostFormComponent {
  @Input() userId!: string;
  @Output() onCancel = new EventEmitter<void>();
  @Output() onSubmit = new EventEmitter<Post>();

  newPostForm: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService) {
    this.newPostForm = this.fb.group({
      header: ['', Validators.required],
      desc: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  submitPost(): void {
    if (this.newPostForm.valid) {
      const newPost: Post = {
        userId: this.userId,
        header: this.newPostForm.get('header')?.value,
        desc: this.newPostForm.get('desc')?.value,
        body: this.newPostForm.get('body')?.value
      };
      console.log(newPost);
      this.onSubmit.emit(newPost);
      this.submitNewPost(newPost);  // Chama o método de criação de post
      this.newPostForm.reset();
    }
  }

  cancel(): void {
    this.onCancel.emit();
    this.newPostForm.reset();
  }

  private submitNewPost(newPost: Post): void {
    this.postService.createPost(newPost).subscribe(
      () => {
        console.log('Post created successfully');
      },
      error => {
        console.error('Error creating post:', error);
      }
    );
  }
}
