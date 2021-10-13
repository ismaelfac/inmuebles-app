import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IUsers } from "../../interfaces/users";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  public loading: boolean = false;
  hide = true;

  constructor(private authService: AuthService, private _snackBar: MatSnackBar, private router: Router) { 
  
  }

  ngOnInit(): void {
  }

  onLogin(form:any): void {
    this.authService.login(form.value).subscribe(res => {
      console.log(res);
      if(res) {
        this.loading = true;
        this._snackBar.open('Usuario correcto', '', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
        this.loading = false;
        this.router.navigate(['dashboard']);
      }else {
        this.loading = true;
        this._snackBar.open('Usuario Incorrecto', '', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
        this.loading = false;
      }
    })
  }

}