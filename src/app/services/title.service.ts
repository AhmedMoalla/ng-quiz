import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private title$ = new BehaviorSubject<string>('');
  constructor() { }

  getTitle(): Observable<string> {
    return this.title$.asObservable();
  }

  setTitle(title: string) {
    this.title$.next(title);
  }
}
