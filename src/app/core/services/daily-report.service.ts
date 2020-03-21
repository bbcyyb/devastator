import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TextValuePair } from '../models/textValuePair';

@Injectable({
  providedIn: 'root'
})
export class DailyReportService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<TextValuePair[]> {
    const tv1: TextValuePair = {text: '1', value: '11'};
    const result = of([tv1]);
    return result;
    // return this.http.get<Array<Chart>>(`${this.baseUrl}/getAll`);
  }
}
