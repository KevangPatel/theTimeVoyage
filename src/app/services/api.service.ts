import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mainConstants } from '../constants/main.constants';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  eventsList: any[] = mainConstants.eventList;

  constructor() {}

  getAllEvents(): Observable<any> {
    return of(this.eventsList);
  }
}
