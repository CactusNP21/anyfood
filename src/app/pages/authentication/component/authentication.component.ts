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

  userData = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  })

  login() {
    let {login, password} = this.userData.value
    login += "@gmail.com"
    this.as.login(login!, password!).subscribe(value => {
      if (value instanceof HttpErrorResponse) {
        switch (value.status) {
          case 400: {
            this.invalidLogin()
          }
        }
      }
      console.log(value)
    })
  }
  register() {

  }
  test() {
    this.as.test('nazarkucher3212@gmail.com', "123456").subscribe(value =>{
      console.log(value)
    })
  }
  invalidLogin () {
    this.userData.controls.password.setValue('')
    this._snackBar.open("Неправильний логін або пароль", "Зрозуміло", {
      duration: 10000,
      horizontalPosition:"center",
      verticalPosition: "top"
    })
  }
}
