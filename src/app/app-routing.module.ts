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
import { PerfilAutorComponent } from './pages/perfil-autor/perfil-autor.component';
import { AuthGuard } from './services/auth-guard/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth-guard/auth.interceptor';
import { SobreComponent } from './pages/sobre/sobre.component';

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
    component: PainelAdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'artigo-selecionado/:slug',
    component: ArtigoSelecionadoComponent
  },
  {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: 'forum-selecionado/:slug',
    component: ForumSelecionadoComponent
  },
  { path: 'perfil-autor',
    component: PerfilAutorComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
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
  providers: [AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class AppRoutingModule { }
