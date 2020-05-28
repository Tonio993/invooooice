import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconModule } from './fa-icon/fa-icon.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  imports: [
    CommonModule,
    FaIconModule,
    ReactiveFormsModule
  ],
  declarations: [FormBuilderComponent, ListComponent],
  exports: [
    FormBuilderComponent,
    ListComponent,
    FaIconModule
  ]
})
export class SharedModule { }