import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './components/root/root.component';
import { Route, RouterModule } from '@angular/router';
import { MemberInfoComponent } from '../member/components/member-info/member-info.component';
import { MemberPageComponent } from '../member/components/member-page/member-page.component';
import { InfoPageComponent } from '../info/info-page/info-page.component';
import { AlbumPageComponent } from '../album/components/album-page/album-page.component';
import { MainPageComponent } from '../main-page/main-page/main-page.component';

const routes: Route[] = [
  { path: '', component: MainPageComponent },
  { path: 'info', component: InfoPageComponent },
  { path: 'banda', component: MemberInfoComponent },
  {path: 'album', component: AlbumPageComponent}
]

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
  CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class RootModule { }
