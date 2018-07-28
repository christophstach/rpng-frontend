import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { LoginRequest } from '../../actions/auth.actions';
import { merge, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  loading$: Observable<boolean>;


  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store
  ) {
    this.createForm();
    this.loading$ = this.store.select(state => state.auth.loginLoading);
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
