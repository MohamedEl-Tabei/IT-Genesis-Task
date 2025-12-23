import { Directive, ElementRef, input } from '@angular/core';
import { TAnimationAction } from '../Types/TAnimationAction';

@Directive({
  selector: '[appAnimation]'
})
export class Animation {
  //#region input
  action = input<TAnimationAction>("glow");
  ref = input<HTMLElement | undefined>(undefined)
  //#endregion
  //#region properties
  target!: HTMLElement | HTMLVideoElement
  observer!: IntersectionObserver;
  //#endregion

  constructor(private elementRef: ElementRef) {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) this.onView()
      else this.outView()
    })

  }
  ngAfterViewInit() {
    this.target = this.ref() ? this.ref() : this.elementRef.nativeElement
    this.observer.observe(this.target)
  }
  onView() {
    this.elementRef.nativeElement.classList.add(this.action())
  }
  outView() {
    this.elementRef.nativeElement.classList.remove(this.action())

  }

}
