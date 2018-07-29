import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { RegisterRequest } from '../../actions/auth.actions';
import { AuthState } from '../../states/auth.state';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @Select(AuthState.registerLoading) loading$: Observable<boolean>;

  registerForm: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly fb: FormBuilder,
    private readonly store: Store,
  ) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordRepeated: ['', Validators.required],
      firstName: '',
      lastName: ''
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const {email, username, password, passwordRepeated, firstName, lastName} = this.registerForm.getRawValue();

      this.store.dispatch(new RegisterRequest(email, username, password, passwordRepeated, firstName, lastName));
    }
  }
}
