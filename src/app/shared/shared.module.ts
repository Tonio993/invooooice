import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconModule } from './fa-icon/fa-icon.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';

@NgModule({
  imports: [
    CommonModule,
    FaIconModule,
    ReactiveFormsModule
  ],
  declarations: [FormBuilderComponent],
  exports: [
    FormBuilderComponent,
    FaIconModule
  ]
})
export class SharedModule { }