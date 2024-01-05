import { Component } from '@angular/core';
import { ReactionsComponent } from '../reactions/reactions.component';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [ReactionsComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {

}
