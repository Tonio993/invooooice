import { FormSection } from "../form.model";
import { Validators, FormGroup } from "@angular/forms";

export const UserBaseSection : FormSection = {
  title: 'Dati di accesso',
  items: [
    {input: [{label: 'Username', control: 'username', validation: [Validators.required]}]},
    {
      input: [
        {label: 'Password', control: 'password', type: 'password', validation: [Validators.required]},
        {label: 'Conferma password', control: 'confirmPassword', type: 'password', validation: [Validators.required]}
      ],
      validation: (formGroup: FormGroup): any => {
        if (formGroup.get('password').value !== formGroup.get('confirmPassword').value) {
          return {unmachedPassword: true};
        }
      }
    }
  ]
}