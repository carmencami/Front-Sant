import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'tabla',
        loadChildren: () =>
        import('../private/tabla/tabla.module').then((m) => m.TablaModule),
    },

//   {
//     path: 'shared',
//     loadChildren: () => import('./shared/shared.module').then((m) => m.SharedModule),
//   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
