import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { RedeMtFormComponent } from './rede-mt-form/rede-mt-form.component';
import { RedeMtListaComponent } from './rede-mt-lista/rede-mt-lista.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: 'rede-mt/form', component: RedeMtFormComponent},
    { path: 'rede-mt/form/:id', component: RedeMtFormComponent},
    { path: 'rede-mt/lista', component: RedeMtListaComponent}
  ]}
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedeMtRoutingModule { }
