import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  time = new Observable<string>(
    (observador) =>{
      setInterval(() => {
        observador.next(new Date().toLocaleTimeString());
      }, 1000);

    }
  )
}
