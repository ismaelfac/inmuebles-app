import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  form: FormGroup;
  public loading: boolean = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) { 
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  ingresar(): void {
    const email = this.form.value.email;
    const password = this.form.value.password;
    if(email === 'ismaelfac@gmail.com' && password === '123'){
      this.loading = true;
      this._snackBar.open('Usuario correcto', '', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
      this.loading = false;
      this.router.navigate(['dashboard']);
    }else{
      this.loading = true;
      this._snackBar.open('Usuario Incorrecto', '', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
      this.loading = false;
      this.form.reset();
    }
  }

}
