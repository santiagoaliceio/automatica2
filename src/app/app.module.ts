import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { RootComponent } from './components/root/root.component';
import { RootModule } from './modules/root/root.module';
import { MemberModule } from './modules/member/member.module';
import { InfoModule } from './modules/info/info.module';

@NgModule({
  declarations: [AppComponent, RootComponent],
  imports: [
  BrowserModule,
    AppRoutingModule,
    SharedModule,
    RootModule,
    MemberModule,
    InfoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
