import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ScrollSpyService } from '../../services/scroll-spy.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('pageNavWrapper') pageNavWrapper: ElementRef;

  constructor(private renderer: Renderer2, private scrollSpyService: ScrollSpyService) {
  }

  ngOnInit() {
    this.scrollSpyService.getWindowScroll().subscribe(() => {
      this.renderer.removeClass(this.pageNavWrapper.nativeElement, 'fixed');

      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const topDistance = this.pageNavWrapper.nativeElement.getBoundingClientRect().top + scrollTop;

      if (topDistance > scrollTop) {
        this.renderer.removeClass(this.pageNavWrapper.nativeElement, 'fixed');
      } else {
        this.renderer.addClass(this.pageNavWrapper.nativeElement, 'fixed');
      }
    });
  }
}
