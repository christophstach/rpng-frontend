import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private readonly isPlatformBrowser: boolean;

  loading: boolean;
  user: any;

  constructor(private readonly route: ActivatedRoute, private readonly authService: AuthService, @Inject(PLATFORM_ID) platformId: Object) {
    this.isPlatformBrowser = isPlatformBrowser(platformId);
  }


  ngOnInit() {
    this.loading = true;

    if (this.isPlatformBrowser) {
      this.subscription = this.route.params.subscribe(params => {
        const {token} = params;
        this.loading = true;

        this.authService.verifyEmail(token).subscribe(user => {
          this.loading = false;
          this.user = user;
        });
      });
    }
  }

  ngOnDestroy() {
    if (this.isPlatformBrowser) {
      this.subscription.unsubscribe();
    }
  }
}
