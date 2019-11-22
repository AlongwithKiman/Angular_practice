import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';   // 라우팅 규칙
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';       //여기서 히어로 정보 가져온다
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
 //TODO : 라우팅 규칙을 활용해서 , 링크 뒤에 id에 해당하는 값을 추출한 다음 그 값을 활용해 히어로 서비스에서 해당 히어로 데이터를 가져온다.
  constructor(  
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
    ) { }
 
    ngOnInit(): void {
        this.getHero();
      }
      
      getHero(): void {
        const id = +this.route.snapshot.paramMap.get('id');     // 아까 router에서 쓴 규칙에서, id에 해당하는 숫자를 id 상수에 저장
        this.heroService.getHero(id)
          .subscribe(hero => this.hero = hero);
      }
      
      goBack(): void {
        this.location.back();
      }
 
}