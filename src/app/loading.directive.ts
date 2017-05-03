import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[show-load]'
})
export class LoadingDirective {

  constructor() { }

  @HostListener('click', ['$event.target'])

  showLoading(btn: HTMLButtonElement) {
    console.log("showLoading2");
  }

}
