import { inject, TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';
import { MzToastModule } from 'ngx-materialize';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MzToastModule
      ],
      providers: [
        MessageService
      ]
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));
});
