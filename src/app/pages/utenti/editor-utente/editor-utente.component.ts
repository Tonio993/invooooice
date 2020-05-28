import { Component, OnInit } from '@angular/core';

import { User } from '../../../model/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../service/user/user.service';
import { FormGroup } from '@angular/forms';
import { FormUtils } from '../../../utils/form.utils';

import { UserNewFormStructure } from '../../../model/form-structure/forms/user-new.form';
import { FormStructure, FormModel } from '../../../model/form-structure/form.model';
import { UserFormEditStructure } from '../../../model/form-structure/forms/user-edit.form';

@Component({
  selector: 'app-editor-utente',
  templateUrl: './editor-utente.component.html',
  styleUrls: ['./editor-utente.component.css']
})
export class EditorUtenteComponent implements OnInit {
  private user : User;
  private formStructure: FormStructure;
  private formModel: FormModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private users: UserService) { }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get("id");
    if (id) {
      this.formStructure = UserFormEditStructure;
      this.user = this.users.getUser(id);
    } else {
      this.formStructure = UserNewFormStructure;
    }
    this.formModel = new FormModel(this.formStructure);
    if (this.user) {
      FormUtils.setFormValue(this.user, this.formModel.formGroup);
    }
  }

  onSubmit(userForm: FormGroup) {
    console.log(userForm);
    if (userForm.valid) {
      var submitUser = FormUtils.toObject(userForm);
      if (this.user) {
        submitUser = {...this.user, ...submitUser};
        this.users.updateUser(submitUser);
      } else {
        this.users.addUser(submitUser);
      }
    }
    this.router.navigate(['..', 'utenti'])
  }

}