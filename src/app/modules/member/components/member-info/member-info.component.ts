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
      imagen1: './assets/logo-clean.png',
      imagen2: 'img2',
      imagen3: 'img3',
      imagen4: 'img4',
    },
    {
      id: '2',
      nombre: 'Santiago',
      imagen1: 'img1',
      imagen2: 'img2',
      imagen3: 'img3',
      imagen4: 'img4',
    },
    {
      id: '3',
      nombre: 'Garza',
      imagen1: 'img1',
      imagen2: 'img2',
      imagen3: 'img3',
      imagen4: 'img4',
    }, {
      id: '4',
      nombre: 'Pitu',
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
    this.santi
  }

  mancuso() {
    this.router.navigate([], { 
      relativeTo: this.activatedRoute,
      queryParams: { integrante: 1 },
      queryParamsHandling: 'merge' })
  }

  santi() {
    this.router.navigate([], { 
      relativeTo: this.activatedRoute,
      queryParams: { integrante: 2 },
      queryParamsHandling: 'merge' })
  }

}
