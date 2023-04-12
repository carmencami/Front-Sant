import { TablaComponent } from './components/tabla/tabla.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: '',
    component: TablaComponent
}];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class TablaRoutingModule { }


