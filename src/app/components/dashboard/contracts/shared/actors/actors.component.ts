import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'shared-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  flexLayoutLeese: number = 100;
  IsPersonaJuridica: boolean = true;
  actorTitle: string = '';
  lblNameActor: string = '';
  lblDniActor: string = '';
  lblEmailActor: string = '';
  lblAddressActor: string = '';
  lblPhoneActor: string = '';

  isTypePerson: boolean = true;
  fmrActors = this.fb.group({
    selectedValueTypePerson: ['', Validators.required],
    txtNamesActor: ['', Validators.required],
    txtDniActor: ['', Validators.required],
    txtEmailActor: ['', Validators.required],
    txtAddressActor: ['', Validators.required],
    txtPhoneActor: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  onSendActor(): void {
    
  }

}
