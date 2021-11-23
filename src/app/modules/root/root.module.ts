import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './components/root/root.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
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
