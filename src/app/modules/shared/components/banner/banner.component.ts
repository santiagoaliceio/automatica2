import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }
  @Input() imgUrl: string =  ''
  @Input() subtitle: string = ''
  @Input() ig: string = ''
  @Input()  fb: string = ''



  ngOnInit(): void {
  }

}
