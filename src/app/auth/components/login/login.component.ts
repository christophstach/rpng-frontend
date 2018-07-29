import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { LoginRequest } from '../../actions/auth.actions';
import { Observable } from 'rxjs';
import { AuthState } from '../../states/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Select(AuthState.loginLoading) loading$: Observable<boolean>;

  loginForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: ''
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const {email, password} = this.loginForm.getRawValue();

      this.store.dispatch(new LoginRequest(email, password));
    }
  }
}
