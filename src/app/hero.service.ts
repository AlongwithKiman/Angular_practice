import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';  //   서버에서 받아오기 구현
import { MessageService } from './message.service'; // service - in - service
@Injectable({
  providedIn: 'root'
})
export class HeroService {



  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes'); // 데이터 받아오면 받아왔다고 메세지 표시하기(메세지 서비스에 메세지 보내기.).
                                                            // 메세지 표시는 메세지 서비스 쪽에서 
    return of (HEROES);   // of : 자동으로 함수 return형에 맞춰서 반환하는듯?
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);  // javascript
    return of(HEROES.find(hero => hero.id === id));
  }

  constructor(private messageService: MessageService) { }
}
