import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginainicioComponent } from './public/pages/paginainicio/paginainicio.component';


const routes: Routes = [
  {
    path: 'public',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
  {
    path: '',
    component: PaginainicioComponent
  },
  {
    path: 'private',
    loadChildren: () =>
      import('./private/private.module').then((m) => m.PrivateModule),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
