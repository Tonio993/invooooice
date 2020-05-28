import { FormGroup } from "@angular/forms";

export class FormUtils {

  static setFormValue(object: any, form: FormGroup) {
    Object.keys(form.controls).forEach(key => {
      form.get(key).setValue(object[key]);
    });
  }

  static toObject(form: FormGroup): any {
    var object = {};
    Object.keys(form.controls).forEach(key => {
      object[key] = form.get(key).value;
    });
    return object;
 
  }

}