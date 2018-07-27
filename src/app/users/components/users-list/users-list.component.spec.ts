import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListComponent } from './users-list.component';
import { MzCardModule, MzToastModule } from 'ngx-materialize';
import { GqlModule } from '../../../core/gql/gql.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MzCardModule,
        GqlModule,
        HttpClientModule,
        NgxsModule.forRoot([]),
        MzToastModule
      ],
      providers: [],
      declarations: [
        UsersListComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
