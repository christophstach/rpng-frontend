import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { NavComponent } from '../nav/nav.component';
import { MzNavbarModule, MzSidenavModule } from 'ngx-materialize';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { JwtModule } from '@auth0/angular-jwt';
import { getToken } from '../../../utility/utility.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([]),
        MzNavbarModule,
        MzSidenavModule,
        JwtModule.forRoot({
          config: {
            tokenGetter: getToken
          }
        }),
      ],
      declarations: [
        HeaderComponent,
        NavComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
