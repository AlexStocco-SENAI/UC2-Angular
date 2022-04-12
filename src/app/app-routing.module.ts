import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MuralVagasComponent } from './mural-vagas/mural-vagas.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path:"vagas", component:MuralVagasComponent},
  {path:"cadastro", component:CadastroComponent},
  {path:"sobre", component:SobreComponent},
  {path:"", component:MuralVagasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
