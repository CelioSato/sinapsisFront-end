import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { SubestacaoFormComponent } from './subestacao-form/subestacao-form.component'
import { SubestcaoListaComponent } from './subestcao-lista/subestcao-lista.component'

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: 'subestacao/form', component:SubestacaoFormComponent },
    { path: 'subestacao/form/:id', component:SubestacaoFormComponent },
    { path: 'subestacao/lista', component:SubestcaoListaComponent },
  ]}
     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubestacaoRoutingModule { }
