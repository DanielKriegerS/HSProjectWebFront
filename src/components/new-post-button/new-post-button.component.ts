import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../models/post';

@Component({
  selector: 'app-new-post-button',
  templateUrl: './new-post-button.component.html',
  styleUrls: ['./new-post-button.component.css']
})
export class NewPostButtonComponent {
  @Input() userId!:string;
  @Output() onCancel = new EventEmitter<void>();
  @Output() onSubmit = new EventEmitter<Post>();

  newPostForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
      this.newPostForm.reset();
    }
  }

  cancel(): void {
    this.onCancel.emit();
    this.newPostForm.reset();
  }
}
