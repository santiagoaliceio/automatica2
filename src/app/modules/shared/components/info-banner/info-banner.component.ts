import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-banner',
  templateUrl: './info-banner.component.html',
  styleUrls: ['./info-banner.component.scss']
})
export class InfoBannerComponent implements OnInit {

  constructor() { }

  @Input() imgUrl: string = ''

  ngOnInit(): void {
  }

}
