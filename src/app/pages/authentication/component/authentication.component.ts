import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "../service/authentication.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthenticationComponent {
  constructor(private fb: FormBuilder, private as: AuthenticationService,
  private _snackBar: MatSnackBar) {
  }

  login = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  })

  log() {
    const {login, password} = this.login.value
    this.as.login(login!, password!).subscribe(value => {
      if (value instanceof HttpErrorResponse) {
        switch (value.status) {
          case 404: {
            this.invalidLogin()
          }
        }
      }
    })
  }
  invalidLogin () {
    this.login.controls.password.setValue('')
    this._snackBar.open("Неправильний логін або пароль", "Зрозуміло", {
      duration: 10000,
      horizontalPosition:"center",
      verticalPosition: "top"
    })
  }
}
