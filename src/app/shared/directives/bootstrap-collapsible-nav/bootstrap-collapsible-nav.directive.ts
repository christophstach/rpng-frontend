import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBootstrapCollapsibleNav]'
})
export class BootstrapCollapsibleNavDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }


  ngOnInit() {
  }
}
