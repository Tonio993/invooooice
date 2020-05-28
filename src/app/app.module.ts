import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NavbarComponent } from "./core/navbar/navbar.component";
import { SharedModule } from "./shared/shared.module";
import { HomeComponent } from "./home/home.component";
import { CreaFatturaAttivaComponent } from './pages/fatture-attive/crea-fattura-attiva/crea-fattura-attiva.component';
import { BreadcrumbComponent } from './core/breadcrumb/breadcrumb.component';
import { UserService } from './service/user/user.service';
import { RicercaUtentiComponent } from "./pages/utenti/ricerca-utenti/ricerca-utenti.component";
import { EditorUtenteComponent } from "./pages/utenti/editor-utente/editor-utente.component";
import { ListaUtentiComponent } from "./pages/utenti/lista-utenti/lista-utenti.component";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BreadcrumbComponent,
    CreaFatturaAttivaComponent,
    RicercaUtentiComponent,
    EditorUtenteComponent,
    ListaUtentiComponent
  ],
  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule {}
