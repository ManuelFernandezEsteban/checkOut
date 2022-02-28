import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesModalService {

  constructor() { }

  modal = new EventEmitter<boolean>();
}
