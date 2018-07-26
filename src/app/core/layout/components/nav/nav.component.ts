import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { AuthStateModel } from '../../../../auth/states/auth.state';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Logout } from '../../../../auth/actions/auth.actions';
import { MediaService } from '../../../utility/services/media.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isLogin$: Observable<boolean>;
  smallResolution$: Observable<boolean>;
  @Select(state => (state.auth as AuthStateModel).jwtPayload.username) username$: Observable<string>;

  constructor(
    private readonly store: Store,
    private readonly jwtHelperService: JwtHelperService,
    private readonly mediaService: MediaService,
  ) {
    this.isLogin$ = this.store.select(state => !this.jwtHelperService.isTokenExpired((state.auth as AuthStateModel).jwt));
    this.smallResolution$ = this.mediaService.isActive('lt-l');
  }

  onLogout() {
    this.store.dispatch(new Logout());
  }
}
