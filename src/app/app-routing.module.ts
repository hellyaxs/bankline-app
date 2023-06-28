import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrentistasComponent } from './components/correntistas/correntistas.component';
import { MovimentacaoListComponent } from './components/movimentacao-list/movimentacao-list.component';
import { MovimentacaoNewComponent } from './components/movimentacao-new/movimentacao-new.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:"movimentacoes" ,component:MovimentacaoListComponent},
  {path:"movimentacoes-new", component:MovimentacaoNewComponent},
  {path:"correntistas", component:CorrentistasComponent},
  {path:"", pathMatch:"full",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
