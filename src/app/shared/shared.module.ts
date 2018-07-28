import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MomentPipe } from './pipes/moment.pipe';
import { SocialNavComponent } from './components/social-nav/social-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MzBadgeModule,
  MzButtonModule,
  MzCardModule,
  MzCheckboxModule,
  MzIconMdiModule,
  MzIconModule,
  MzInputModule,
  MzNavbarModule, MzProgressModule,
  MzSidenavModule, MzSpinnerModule,
  MzToastModule
} from 'ngx-materialize';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MzNavbarModule,
    MzInputModule,
    MzCheckboxModule,
    MzButtonModule,
    MzCardModule,
    MzToastModule,
    MzIconModule,
    MzIconMdiModule,
    MzSidenavModule,
    MzBadgeModule,
    MzProgressModule,
    MzSpinnerModule
  ],
  declarations: [
    MomentPipe,
    SocialNavComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MomentPipe,
    SocialNavComponent,
    MzNavbarModule,
    MzInputModule,
    MzCheckboxModule,
    MzButtonModule,
    MzCardModule,
    MzToastModule,
    MzIconModule,
    MzIconMdiModule,
    MzSidenavModule,
    MzBadgeModule,
    MzProgressModule,
    MzSpinnerModule
  ]
})
export class SharedModule {
}
