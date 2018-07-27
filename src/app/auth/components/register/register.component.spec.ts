import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MzCardModule, MzInputModule, MzToastModule } from 'ngx-materialize';
import { GqlModule } from '../../../core/gql/gql.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        NgxsModule.forRoot([]),
        GqlModule,
        MzInputModule,
        MzCardModule,
        MzToastModule
      ],
      declarations: [RegisterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
