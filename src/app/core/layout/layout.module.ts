import { NgModule } from '@angular/core';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { SharedModule } from '../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageComponent } from './components/page/page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    SharedModule,
  ],
  declarations: [
    AppShellComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    BackToTopComponent,
    PageComponent,
    HomePageComponent
  ],
  exports: [
    AppShellComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    BackToTopComponent,
    PageComponent
  ]
})
export class LayoutModule {
}
