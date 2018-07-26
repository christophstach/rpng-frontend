import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profileForm: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.profileForm = this.fb.group({
      email: [
        {value: '', disabled: true},
        [Validators.required, Validators.email]
      ],
      username: [
        {value: '', disabled: true},
        Validators.required
      ],
      firstName: '',
      lastName: ''
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.authService.register(this.profileForm.getRawValue())
        .subscribe((response) => {
          alert('Successfully registered');
        });
    }
  }

}
