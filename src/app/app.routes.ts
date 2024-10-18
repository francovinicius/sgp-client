import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'sgp' },
  {
    path: 'sgp',
    loadChildren: () => import ('./pessoas/pessoas.module').then (m => m.PessoasModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import ('./cadastro/cadastro.module').then (m => m.CadastroModule)
  }
];
