import { Component } from '@angular/core';
import {Portal} from "@angular/cdk/portal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedPortal : Portal<any>
  title = 'anyfood';
}
