import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TimelineItemComponent } from './components/timeline/timeline-item/timeline-item.component';
import { BootstrapCollapsibleNavDirective } from './directives/bootstrap-collapsible-nav/bootstrap-collapsible-nav.directive';
import { SmoothScrollDirective } from './directives/smooth-scroll/smooth-scroll.directive';
import { MomentPipe } from './pipes/moment.pipe';
import { SocialNavComponent } from './components/social-nav/social-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    BootstrapCollapsibleNavDirective,
    SmoothScrollDirective,
    MomentPipe,
    TimelineComponent,
    TimelineItemComponent,
    SocialNavComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BootstrapCollapsibleNavDirective,
    SmoothScrollDirective,
    MomentPipe,
    TimelineComponent,
    TimelineItemComponent,
    SocialNavComponent
  ]
})
export class SharedModule {
}
