import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Logout } from '../../../../auth/actions/auth.actions';
import { Observable } from 'rxjs';
import { AuthStateModel } from '../../../../auth/states/auth.state';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLogin$: Observable<boolean>;
  @Select(state => (state.auth as AuthStateModel).jwtPayload.username) username$: Observable<string>;

  constructor(private readonly store: Store, private readonly jwtHelperService: JwtHelperService) {
    this.isLogin$ = this.store.select(state => !this.jwtHelperService.isTokenExpired((state.auth as AuthStateModel).jwt));
  }

  onLogout() {
    this.store.dispatch(new Logout());
  }
}
