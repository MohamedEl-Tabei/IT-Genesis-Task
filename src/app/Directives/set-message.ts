import { Directive, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[appSetMessage]'
})
export class SetMessage {

  to=input<ElementRef<HTMLElement>>()
  observer!:IntersectionObserver;
  constructor() { }

}
