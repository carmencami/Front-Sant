import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'tabla',
        loadChildren: () =>
        import('../private/tabla/tabla.module').then((m) => m.TablaModule),
    },
    


//   {
//     path: 'messages',
//     loadChildren: () => import('./chat/chat.module').then((m) => m.ChatModule),
//   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
