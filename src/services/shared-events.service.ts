import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedEventsService {

  modoEdicaoChange = new EventEmitter<boolean>();
}
