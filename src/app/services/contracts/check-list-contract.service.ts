import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckListContractService {
  @Output() disparadorCheckListContract: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
