import { FormControl, FormGroup, ValidatorFn, ValidationErrors } from "@angular/forms";

export interface FormStructure {
  sections: FormSection[]
}

export interface FormSection {
  title: string,
  items: FormItem[]
}

export interface FormItem {
  input: FormInput[],
  validation?: any,
  action?: (form: FormGroup) => void
}

export interface FormInput {
  label: string,
  control: string,
  validation?: any,
  type?: string
}

export class FormModel {
  form: FormStructure;
  formGroup: FormGroup;

  constructor(form: FormStructure) {
    this.form = form;
    var validators: ValidatorFn[] = [];
    this.formGroup = new FormGroup({});
    for (let section of this.form.sections) {
      for (let item of section.items) {
        for (let input of item.input) {
          this.formGroup.addControl(input.control, new FormControl('', input.validation));
        }
        if (item.validation) {
          validators.push(item.validation);
        }
      }
    }
    this.formGroup.validator = (fg: FormGroup) => {
      var validationErrors: ValidationErrors = {};
      for (let validator of validators) {
        validationErrors = {...validationErrors, ...validator(fg)};
      }
      return validationErrors;
    }
  }
}