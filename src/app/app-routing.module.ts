import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './components/root/root.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    loadChildren: () =>
      import('./modules/root/root.module').then((m) => m.RootModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
