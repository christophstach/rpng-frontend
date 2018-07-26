import { Injectable } from '@angular/core';
import { MzToastService } from 'ngx-materialize';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private toastService: MzToastService) {
  }

  info(message: string) {
    this.toastService.show(message, 4000);
  }

  success(message: string) {
    this.toastService.show(message, 4000, 'green');
  }

  warning(message: string) {
    this.toastService.show(message, 4000, 'yellow');
  }

  error(message: string) {
    this.toastService.show(message, 4000, 'red');
  }
}
