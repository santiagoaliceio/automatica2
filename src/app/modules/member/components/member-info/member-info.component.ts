import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Integrantes } from 'src/app/interfaces/integrantes.interface';

@Component({
  selector: 'app-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.scss']
})
export class MemberInfoComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  integrantes:any = [
    {
      id: '1',
      nombre: 'Mancuso',
      bannerImg: './assets/images/mancuso/mancuso-banner.jpg',
      imagen1: './assets/images/mancuso/1.jpg',
      imagen2: './assets/images/mancuso/2.jpg',
      imagen3: './assets/images/mancuso/3.jpg',
      imagen4: './assets/images/mancuso/4.jpg',

    },
    {
      id: '2',
      nombre: 'Santiago Aliceio',
      bannerImg: './assets/images/santi/santi-banner.jpg',
      imagen1: './assets/images/santi/1.jpg',
      imagen2: './assets/images/santi/2.jpg',
      imagen3: './assets/images/santi/3.jpg',
      imagen4: './assets/images/santi/4.png',
    },
    {
      id: '3',
      nombre: 'Enrique Sosa',
      bannerImg: '',
      imagen1: 'img1',
      imagen2: 'img2',
      imagen3: 'img3',
      imagen4: 'img4',
    }, {
      id: '4',
      nombre: 'Gustavo Tort',
      bannerImg: '',
      imagen1: 'img1',
      imagen2: 'img2',
      imagen3: 'img3',
      imagen4: 'img4',
    }
  ]

  integranteId: number
  integrante: Integrantes

  ngOnInit(): void {
    combineLatest([
      this.activatedRoute.queryParamMap,
      this.activatedRoute.paramMap,
    ]).subscribe(([queryParamMap, paramMap]) => {
      this.integranteId = +(queryParamMap.get('integrante') || '')
      this.integrante = this.integrantes[this.integranteId - 1]
    })
    console.log(this.integrante)
    this.mancuso
    this.santiagoAliceio
    this.enriqueSosa
    this.gustavoTort
  }

  mancuso() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { integrante: 1 },
      queryParamsHandling: 'merge' })
  }

  santiagoAliceio() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { integrante: 2 },
      queryParamsHandling: 'merge' })
  }


  enriqueSosa() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { integrante: 3 },
      queryParamsHandling: 'merge' })
  }
  gustavoTort() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { integrante: 4 },
      queryParamsHandling: 'merge' })
  }
}
