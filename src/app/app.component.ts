import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {Portal} from "@angular/cdk/portal";
import {DishesStateService} from "./core/dishes-state/dishes-state.service";
import {SpinnerOverlayService} from "./feature/spinner-overlay/service/spinner-overlay.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{


}
