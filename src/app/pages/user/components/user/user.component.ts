import {Component, OnInit} from '@angular/core';
import {UserStateService} from "../../../../core/user-state/user-state.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  date!: Date
  username: string = ''
  constructor(private user: UserStateService,
              private router: Router) {
  }

  ngOnInit() {
    this.date = new Date()
    this.username = this.user.username
  }
  exit() {
    this.user.clearUser()
    this.router.navigate(['auth'])
  }
}
