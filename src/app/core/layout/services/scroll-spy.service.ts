import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { publish } from 'rxjs/operators';
import { EMPTY } from 'rxjs/internal/observable/empty';
import { ConnectableObservable } from 'rxjs/internal/observable/ConnectableObservable';


@Injectable({
  providedIn: 'root'
})
export class ScrollSpyService {
  private readonly scrollSpy$: Observable<{ [key: string]: boolean }>;
  private readonly windowScroll$: Observable<Event>;
  private scrollSpies: { [key: string]: any } = {};

  constructor() {
    if (typeof window !== 'undefined') {
      this.windowScroll$ = fromEvent(window, 'scroll');
      this.scrollSpy$ = Observable.create((observer) => {
        this.windowScroll$.subscribe((event: Event) => {
          const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
          const result = {...this.scrollSpies};
          const keys = Object.keys(this.scrollSpies);

          keys.forEach((key) => {
            if (this.scrollSpies[key] <= scrollPosition) {
              const allActiveLis = document.querySelector('a.active');
              const currentLi = document.querySelector('a[data-scroll-spy-link][href*=' + key + ']');

              if (allActiveLis) {
                allActiveLis.classList.remove('active');
              }

              if (!currentLi.classList.contains('active')) {
                currentLi.classList.add('active');
              }

              for (const o in result) {
                if (result.hasOwnProperty(o)) {
                  result[o] = false;
                }
              }

              result[key] = true;
            }
          });

          observer.next(result);
        });
      });
    } else {
      this.windowScroll$ = EMPTY;
      this.scrollSpy$ = EMPTY;
    }

    (this.scrollSpy$.pipe(
      publish()
    ) as ConnectableObservable<{ [key: string]: boolean }>).connect();
  }

  getWindowScroll(): Observable<Event> {
    return this.windowScroll$;
  }

  getScrollSpy(): Observable<{ [key: string]: boolean }> {
    return this.scrollSpy$;
  }

  reset(offset = 260) {
    const scrollSpies = document.querySelectorAll('[data-scroll-spy]');

    Array.prototype.forEach.call(scrollSpies, (e) => {
      this.scrollSpies[e.getAttribute('data-scroll-spy')] = e.offsetTop - offset;
    });

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }
}
