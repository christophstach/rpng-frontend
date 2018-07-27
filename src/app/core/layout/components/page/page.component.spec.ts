import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComponent } from './page.component';
import { HeaderComponent } from '../header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from '../footer/footer.component';
import { NavComponent } from '../nav/nav.component';
import { MzCardModule, MzNavbarModule, MzSidenavModule } from 'ngx-materialize';
import { NgxsModule } from '@ngxs/store';
import { JwtModule } from '@auth0/angular-jwt';
import { getToken } from '../../../utility/utility.module';

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([]),
        MzCardModule,
        MzSidenavModule,
        MzNavbarModule,
        JwtModule.forRoot({
          config: {
            tokenGetter: getToken
          }
        }),
      ],
      declarations: [
        PageComponent,
        HeaderComponent,
        FooterComponent,
        NavComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
