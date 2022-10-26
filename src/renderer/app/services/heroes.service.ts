import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  getAll(): Observable<Hero[]> {
    return new Observable<Hero[]>((observer) => {
      setTimeout(() => {
        const data: Hero[] = [
          { id: '11', name: 'Dr Nice' },
          { id: '12', name: 'Narco' },
          { id: '13', name: 'Bombasto' },
          { id: '14', name: 'Celeritas' },
          { id: '15', name: 'Magneta' },
          { id: '16', name: 'RubberMan' },
          { id: '17', name: 'Dynama' },
          { id: '18', name: 'Dr IQ' },
          { id: '19', name: 'Magma' },
          { id: '20', name: 'Tornado' },
        ];
        observer.next(data);
        observer.complete();
      }, 2000);
    });
  }
}
