import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreaFatturaAttivaComponent } from './pages/fatture-attive/crea-fattura-attiva/crea-fattura-attiva.component';
import { RicercaUtentiComponent } from './pages/utenti/ricerca-utenti/ricerca-utenti.component';
import { EditorUtenteComponent } from './pages/utenti/editor-utente/editor-utente.component';

import { hardcodedRoutes } from './hardcode/hardcode-routing';
import { ListaUtentiComponent } from './pages/utenti/lista-utenti/lista-utenti.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(hardcodedRoutes)
  ],
  declarations: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}