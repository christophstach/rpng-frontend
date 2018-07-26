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
  MzInputModule, MzMediaModule,
  MzNavbarModule, MzSidenavModule,
  MzToastModule
} from 'ngx-materialize';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    MzBadgeModule
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
    MzBadgeModule
  ]
})
export class SharedModule {
}
