import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Album } from './../../../../interfaces/album.interface';



@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss'],
})


export class AlbumPageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    ) {}



  albums: any = [
    {
      id: '1',
      title: 'Donde Estás',
      cover: './assets/images/albums/donde-estas/donde-estas.jpg',
      image1: './assets/images/albums/donde-estas/donde-estas-banner.jpg',
      spotify: this.sanitizer.bypassSecurityTrustResourceUrl('https://open.spotify.com/embed/album/7HpywzEGBcwCdRukNUeasn?utm_source=generator'),

    },

    {
      id: '2',
      title: 'Oscuro Elixir',
      cover: './assets/images/albums/oscuro-elixir/oscuro-elixir.jpg',
      image1: './assets/images/albums/oscuro-elixir/oscuro-elixir-banner.jpg',
      spotify: this.sanitizer.bypassSecurityTrustResourceUrl('https://open.spotify.com/embed/album/4IWtimmFG2uVkBQr9dLTIk?utm_source=generator'),
    },

    {
      id: '3',
      title: 'Satélites',
      cover: './assets/images/albums/satelites/satelites.jpg',
      image1: './assets/images/albums/satelites/satelites-banner.jpg',
      spotify: this.sanitizer.bypassSecurityTrustResourceUrl('https://open.spotify.com/embed/album/358IiR0J6semC2kEyetWBi?utm_source=generator'),

    },
  ];

  albumId: number;
  album: Album;

  ngOnInit(): void {
    combineLatest([
      this.activatedRoute.queryParamMap,
      this.activatedRoute.paramMap,
    ]).subscribe(([queryParamMap, paramMap]) => {
      this.albumId = +(queryParamMap.get('album') || '');
      this.album = this.albums[this.albumId - 1];
    });
    console.log(this.album);
    this.dondeEstas
    this.satelites
    this.oscuroElixir
  }

  dondeEstas() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { album: 1 },
      queryParamsHandling: 'merge',
    });
  }

  oscuroElixir() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { album: 2 },
      queryParamsHandling: 'merge',
    });
  }

  satelites() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { album: 3 },
      queryParamsHandling: 'merge',
    });
  }
}
