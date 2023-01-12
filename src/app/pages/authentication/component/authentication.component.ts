import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "../service/authentication.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserStateService} from "../../../core/user-state/user-state.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthenticationComponent {
  constructor(private fb: FormBuilder, private as: AuthenticationService,
              private _snackBar: MatSnackBar, private user: UserStateService,
              private router: Router) {
  }

  userData = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  userRegData = this.fb.group({
    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  login() {
    const {email, password} = this.userData.value
    this.as.login(email!, password!).subscribe(value => {
      if (value instanceof HttpErrorResponse) {
        switch (value.status) {
          case 400: {
            this.userData.controls.email.setValue('')
            this.notification('Не існує / неправильні дані')
          }
        }
        return
      }
      if (value instanceof Error) {
        return;
      }
      console.log(value)
      this.user.setUser(value)
      this.router.navigate(['user'])
    })
  }

  hint = 'Ще 6 симовлів'

  updateLeft() {
    const left = 6 - this.userRegData.controls.password.value!.length
    this.hint = `Ще ${left} символів`
    if (left <= 0) {
      this.hint = ''
    }
  }

  register() {
    const {email, username, password} = this.userRegData.value
    this.as.register(email!, username!, password!).subscribe(value => {
        if (value instanceof HttpErrorResponse) {
          switch (value.status) {
            case 400: {
              this.userRegData.controls.email.setValue('')
              this.notification('Невірний формат')
              return
            }
            case 403: {
              this.userRegData.controls.email.setValue('')
              this.notification('Такий користувач вже існує')
              return;
            }
          }
          return;
        }
        if (value instanceof Error) {
          return;
        }
        this.user.setUser(value)
      }
    )
  }

  notification(message: string) {
    this.userData.controls.password.setValue('')
    this._snackBar.open(message, "Зрозуміло", {
      duration: 10000,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }
}
