import { NavigationItem } from "../core/navbar/navigation";

export const hardcodedNavigationList: NavigationItem[] = {
  itemList: [
    {
      label:'Utenti',
      itemList: [
        {label: 'Crea utente', path:'utenti/new'},
        {label: 'Lista utenti', path:'utenti'}
      ]
    },
    {
      label:'Fatture attive',
      itemList: [
        {
          label: 'Fatture SDI',
          itemList: [
            {label:'Inserimento', path: 'fatturaAttiva/new'},
            {label:'Importazione Multipla', path: ''},
            {label:'Conservazione Fatture SDI', path: ''}
          ]
        },
        {label: 'Ricerca', path: ''},
        {label: 'Eliminazione Fatture Attive', path: ''}
      ]
    }, {
      label:'Fatture passive',
      itemList: [
        {label: 'Fatture SDI', path: ''},
        {label: 'Ricerca', path: ''},
        {label: 'Eliminazione Fatture Passive', path: ''},
        {label: 'Protocollazione', path: ''}
      ]
    }
  ]
};
