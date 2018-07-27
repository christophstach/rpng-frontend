import { inject, TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { GqlModule } from '../../../core/gql/gql.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { MzToastModule, MzToastService } from 'ngx-materialize';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        GqlModule,
        HttpClientModule,
        NgxsModule.forRoot([]),
        MzToastModule
      ],
      providers: [
        AuthService,
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
