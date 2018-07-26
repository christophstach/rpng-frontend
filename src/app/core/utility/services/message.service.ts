import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() {

  }

  info(message: string, title?: string) {
    if (title) {
      alert(`
${title}
#####################################

${message}
    `);
    } else {
      alert(message);
    }
  }

  success(message: string, title?: string) {
    if (title) {
      alert(`
${title}
#####################################

${message}
    `);
    } else {
      alert(message);
    }
  }

  warning(message: string, title?: string) {
    if (title) {
      alert(`
${title}
#####################################

${message}
    `);
    } else {
      alert(message);
    }
  }

  error(message: string, title?: string) {
    if (title) {
      alert(`
${title}
#####################################

${message}
    `);
    } else {
      alert(message);
    }
  }
}
