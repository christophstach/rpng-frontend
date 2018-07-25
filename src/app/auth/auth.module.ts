import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './states/auth.state';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule,
    NgxsModule.forFeature([
      AuthState
    ])
  ],
  declarations: [LoginComponent, RegisterComponent, ProfileComponent, VerifyEmailComponent]
})
export class AuthModule {
}
