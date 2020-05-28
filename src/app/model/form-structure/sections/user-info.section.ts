import { FormSection } from "../form.model";
import { Validators } from "@angular/forms";

export const UserInfoSection : FormSection = {
  title: 'Informazioni utente',
  items: [
    {input: [{label: 'Nome', control: 'name'}]},
    {input: [{label: 'Cognome', control: 'surname'}]},
    {input: [{label: 'Data di nascita', control: 'birthdate', type: 'date'}]},
    {input: [{label: 'Città', control: 'city'}]},
    {input: [{label: 'Telefono', control: 'telephone'}]}
  ]
}