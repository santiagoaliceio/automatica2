import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-txt',
  templateUrl: './card-txt.component.html',
  styleUrls: ['./card-txt.component.scss']
})
export class CardTxtComponent implements OnInit {

  constructor() { }
  @Input() cardTxt: string = ''

  ngOnInit(): void {
  }

}
