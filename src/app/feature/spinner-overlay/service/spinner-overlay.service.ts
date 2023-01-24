import { Injectable } from '@angular/core';
import {Overlay, OverlayRef} from "@angular/cdk/overlay";
import {SpinnerComponent} from "../spinner/spinner.component";
import {ComponentPortal} from "@angular/cdk/portal";

@Injectable({
  providedIn: 'root'
})
export class SpinnerOverlayService {
  private overlayRef: OverlayRef

  constructor(private overlay: Overlay) {}
  spinnerOverlayPortal = new ComponentPortal(SpinnerComponent);
  timer: any
  public show() {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }
    this.timer = setTimeout(() => {
      this.overlayRef.attach(this.spinnerOverlayPortal);
    }, 150)
  }

  public hide() {
    if (!!this.overlayRef) {
      clearTimeout(this.timer)
      this.overlayRef.detach();
    }
  }
}
