import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { RootComponent } from './components/root/root.component';
import { RootModule } from './modules/root/root.module';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    SharedModule,
    RootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
