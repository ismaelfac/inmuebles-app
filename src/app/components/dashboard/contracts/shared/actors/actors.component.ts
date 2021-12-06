import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'shared-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actorTitle: string = '';
  lblNameActor: string = '';
  lblDniActor: string = '';
  lblEmailActor: string = '';
  lblAddressActor: string = '';
  lblPhoneActor: string = '';

  isTypePerson: boolean = true;
  fmrActors = this.fb.group({
    selectedValueTypePerson: [''],
    txtNamesActor: [''],
    txtDniActor: [''],
    txtEmailActor: [''],
    txtAddressActor: [''],
    txtPhoneActor: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSendActor(): void {
    
  }

}
