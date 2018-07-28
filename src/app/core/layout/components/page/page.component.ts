import { Component } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  loading$: Observable<boolean>;

  constructor(private readonly store: Store) {
    this.loading$ = merge(
      this.store.select(state => state.auth.loginLoading),
      this.store.select(state => state.auth.registerLoading)
    );
  }
}
