import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumPageComponent } from './components/album-page/album-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AlbumPageComponent],
  imports: [CommonModule,
  SharedModule],

  exports: [AlbumPageComponent],
})
export class AlbumModule {}
