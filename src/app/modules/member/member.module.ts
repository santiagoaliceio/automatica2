import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberPageComponent } from './components/member-page/member-page.component';
import { MemberInfoComponent } from './components/member-info/member-info.component';
import { RootModule } from '../root/root.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MemberPageComponent,
    MemberInfoComponent,
  ],
  imports: [
    CommonModule,
    RootModule,
    RouterModule,
    
  ]
})
export class MemberModule { }
