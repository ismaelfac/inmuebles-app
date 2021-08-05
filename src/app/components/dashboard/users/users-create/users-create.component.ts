import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {
  formUser: FormGroup;
  tiles: any = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private fb: FormBuilder) { 
    this.formUser = this.fb.group({
      usuario: ['usuario', Validators.required],
      names: ['usuario', Validators.required],
      lastName: ['usuario', Validators.required],
      gender: ['usuario', Validators.required],
    });
   }

  ngOnInit(): void {
    
  }

}
