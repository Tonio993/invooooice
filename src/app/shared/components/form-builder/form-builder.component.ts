import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormStructure } from '../../../model/form-structure/form.model';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() formStructure: FormStructure;
  @Input() submitLabel: string;

  @Output() onSubmit: EventEmitter<FormGroup> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onSubmitFunction() {
    this.onSubmit.emit(this.formGroup);
  }

}