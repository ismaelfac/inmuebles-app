import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CheckListContractService {
  @Output() disparadorCheckListContract: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
