import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardComponent } from './components/card/card.component';
import { CardTxtComponent } from './components/card-txt/card-txt.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CardComponent,
    CardTxtComponent,
  ],
  imports: [
  CommonModule
  ],

  exports: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CardComponent,
    CardTxtComponent,
  ]
})
export class SharedModule { }
