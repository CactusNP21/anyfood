import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {


  constructor(private router: Router) {
  }

  discover() {
    this.router.navigate(['discover'])
  }

  dishList() {
    this.router.navigate(['dish-list'])
  }
  shoppingList() {
    this.router.navigate(['shopping-list'])
  }

  userProfile() {
    this.router.navigate(['user'])
  }

}
