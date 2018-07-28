import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { RegisterRequest } from '../../actions/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading$: Observable<boolean>;

  constructor(
    private readonly authService: AuthService,
    private readonly fb: FormBuilder,
    private readonly store: Store,
  ) {
    this.createForm();
    this.loading$ = this.store.select(state => state.auth.registerLoading);
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
