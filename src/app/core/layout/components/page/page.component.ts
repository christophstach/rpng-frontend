import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { AppState } from '../../../state-mgnt/states/app.state';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnDestroy {
  loading = false;
  loadingSubscription: Subscription;

  constructor(private readonly store: Store) {
    this.loadingSubscription = this.store.select(AppState.loading)
      .pipe(delay(0))
      .subscribe(loading => this.loading = loading);
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}
