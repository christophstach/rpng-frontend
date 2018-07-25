import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private httpClient: HttpClient) {
  }

  /**
   * Sends a Email to me.
   *
   * @param {string} from
   * @param {string} subject
   * @param {string} message
   * @returns {Observable<any>}
   */
  sendMail(from: string, subject: string, message: string): Observable<any> {
    const url = 'https://api.christophstach.me/api/mail';

    return this.httpClient.post(url, { from, subject, message });
  }
}
