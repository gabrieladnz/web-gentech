import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TelaCadastroComponent } from './pages/tela-cadastro/tela-cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { ArtigosComponent } from './pages/artigos/artigos.component';

import { MatButtonModule } from '@angular/material/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { ArtigoSelecionadoComponent } from './components/artigo-selecionado/artigo-selecionado.component';
import { ForumSelecionadoComponent } from './components/forum-selecionado/forum-selecionado.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

import { PainelAdminComponent } from './pages/painel-admin/painel-admin.component';
import { ModalPublicarArtigoComponent } from './components/modais/modal-publicar-artigo/modal-publicar-artigo.component';
import { ModalEditarArtigoComponent } from './components/modais/modal-editar-artigo/modal-editar-artigo.component';
import { ModalCadastrarAdminComponent } from './components/modais/modal-cadastrar-admin/modal-cadastrar-admin.component';
import { ForumComponent } from './pages/forum/forum.component';
import { ModalPublicarForumComponent } from './components/modais/modal-publicar-forum/modal-publicar-forum.component';
import { PerfilAutorComponent } from './pages/perfil-autor/perfil-autor.component';
import { MarkdownModule } from 'ngx-markdown';
import { SobreComponent } from './pages/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TelaCadastroComponent,
    LoginComponent,
    ArtigosComponent,
    ArtigoSelecionadoComponent,
    ForumSelecionadoComponent,
    FooterComponent,
    PainelAdminComponent,
    ModalPublicarArtigoComponent,
    ModalEditarArtigoComponent,
    ModalCadastrarAdminComponent,
    ForumComponent,
    ModalPublicarForumComponent,
    PerfilAutorComponent,
    SobreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, MatDividerModule, MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    HttpClientModule,
    MatDialogModule,
    MarkdownModule.forRoot(),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
