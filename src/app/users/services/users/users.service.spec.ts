import { inject, TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { GqlModule } from '../../../core/gql/gql.module';
import { NgxsModule } from '@ngxs/store';
import { MzToastModule, MzToastService } from 'ngx-materialize';

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        GqlModule,
        MzToastModule,
        NgxsModule.forRoot([])
      ],
      providers: [
        UsersService
      ]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
