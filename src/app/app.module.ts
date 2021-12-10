import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { RootComponent } from './components/root/root.component';
import { RootModule } from './modules/root/root.module';
import { MemberModule } from './modules/member/member.module';
import { InfoModule } from './modules/info/info.module';
import { AlbumModule } from './modules/album/album.module';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MainPageModule } from './modules/main-page/main-page.module';


@Pipe({
  name: 'urlbypass'
})
export class UrlbypassPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

@NgModule({
  declarations: [AppComponent, RootComponent,],
  imports: [
BrowserModule,
    AppRoutingModule,
    SharedModule,
    RootModule,
    MemberModule,
    InfoModule,
    AlbumModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MainPageModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
