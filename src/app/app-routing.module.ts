import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TelaCadastroComponent } from './pages/tela-cadastro/tela-cadastro.component';
import { LoginComponent } from './pages/login/login.component'
import { ArtigosComponent } from './pages/artigos/artigos.component';
import { ArtigoSelecionadoComponent } from './components/artigo-selecionado/artigo-selecionado.component';
import { PainelAdminComponent } from './pages/painel-admin/painel-admin.component';
import { ForumComponent } from './pages/forum/forum.component';
import { ForumSelecionadoComponent } from './components/forum-selecionado/forum-selecionado.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cadastro',
    component: TelaCadastroComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'artigos',
    component: ArtigosComponent,
  },
  {
    path: 'painel-admin',
    component: PainelAdminComponent
  },
  { 
    path: 'artigo-selecionado', 
    component: ArtigoSelecionadoComponent
  },
  {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: 'forum-selecionado',
    component: ForumSelecionadoComponent
  },
  // Rota para capturar caminhos não correspondentes
  {
    path: '**',
    redirectTo: '/home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
