import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TelaCadastroComponent } from './pages/tela-cadastro/tela-cadastro.component';
import { LoginComponent } from './pages/login/login.component'

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
