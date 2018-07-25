import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective {
  @Input() appSmoothScroll: string;
  @Input() appSmoothScrollOffset = 55;

  @HostListener('click', ['$event'])
  onClick(event) {
    if (typeof window !== 'undefined') {
      event.preventDefault();

      if (this.appSmoothScroll !== '#') {
        const element = document.querySelector(this.appSmoothScroll) as HTMLElement;
        const top = element.offsetTop;

        this.scroll(top - this.appSmoothScrollOffset);
      } else {
        this.scroll(0);
      }

      if (window.history.pushState) {
        window.history.pushState(null, null, this.appSmoothScroll);
      } else {
        window.location.hash = this.appSmoothScroll;
      }
    }
  }

  private scroll(value: number) {
    window.scroll({
      top: value,
      behavior: 'smooth'
    });
  }
}
