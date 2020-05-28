import { Route } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { RicercaUtentiComponent } from "../pages/utenti/ricerca-utenti/ricerca-utenti.component";
import { EditorUtenteComponent } from "../pages/utenti/editor-utente/editor-utente.component";
import { CreaFatturaAttivaComponent } from "../pages/fatture-attive/crea-fattura-attiva/crea-fattura-attiva.component";
import { ListaUtentiComponent } from "../pages/utenti/lista-utenti/lista-utenti.component";

export const hardcodedRoutes: Route[] = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'utenti/new', component: EditorUtenteComponent, data: {breadcrumb: 'Nuovo Utente'}},
  {path: 'utenti', component: ListaUtentiComponent, data: {breadcrumb: 'Lista Utenti'}},
  {path: 'utenti/:id', component: EditorUtenteComponent, data: {breadcrumb: 'Modifica Utente'}},
  {path: 'fatturaAttiva', data: {breadcrumb: 'Fattura Attiva'}, children: [
    {path: 'new', component: CreaFatturaAttivaComponent, data: {breadcrumb: 'Nuova Fattura'}}
  ]}
];