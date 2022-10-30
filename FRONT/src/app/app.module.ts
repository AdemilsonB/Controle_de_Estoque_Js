import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { ContentComponent } from './components/template/content/content.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { EntradaCadastrarComponent } from './components/views/entrada/cadastrar/cadastrar.component';
import { EntradaDeletarComponent } from './components/views/entrada/deletar/deletar.component';
import { EntradaEditarComponent } from './components/views/entrada/editar/editar.component';
import { EntradaListarComponent } from './components/views/entrada/listar/listar.component';
import { FornecedorCadastrarComponent } from './components/views/fornecedor/cadastrar/cadastrar.component';
import { FornecedorDeletarComponent } from './components/views/fornecedor/deletar/deletar.component';
import { FornecedorEditarComponent } from './components/views/fornecedor/editar/editar.component';
import { FornecedorListarComponent } from './components/views/fornecedor/listar/listar.component';
import { ProdutoCadastrarComponent } from './components/views/produto/cadastrar/cadastrar.component';
import { ProdutoDeletarComponent } from './components/views/produto/deletar/deletar.component';
import { ProdutoEditarComponent } from './components/views/produto/editar/editar.component';
import { ProdutoListarComponent } from './components/views/produto/listar/listar.component';
import { SaidaCadastrarComponent } from './components/views/saida/cadastrar/cadastrar.component';
import { SaidaDeletarComponent } from './components/views/saida/deletar/deletar.component';
import { SaidaEditarComponent } from './components/views/saida/editar/editar.component';
import { SaidaListarComponent } from './components/views/saida/listar/listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    EntradaListarComponent,
    EntradaCadastrarComponent,
    EntradaDeletarComponent,
    EntradaEditarComponent,
    FornecedorListarComponent,
    FornecedorCadastrarComponent,
    FornecedorDeletarComponent,
    FornecedorEditarComponent,
    ProdutoListarComponent,
    ProdutoCadastrarComponent,
    ProdutoDeletarComponent,
    ProdutoEditarComponent,
    SaidaListarComponent,
    SaidaCadastrarComponent,
    SaidaDeletarComponent,
    SaidaEditarComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent] //é executado quando a aplicação é aberta
})
export class AppModule { }
