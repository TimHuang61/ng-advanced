import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[show-loading]'
})
export class LoadingBtnDirective {

  constructor() { }

//
  @HostListener('click', ['$event.target'])

  showLoading(btn: HTMLButtonElement) {
    console.log("showLoading");
    let old = btn.value;
    btn.value = 'Loading...';
    setTimeout(() => btn.value = old, 3000);
  }

}
