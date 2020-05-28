import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import * as FaIconRegular from '@fortawesome/free-regular-svg-icons';
import * as FaIconSolid from '@fortawesome/free-solid-svg-icons';
import { FaConfig } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class FaIconModule {
  constructor(private library: FaIconLibrary, private faService: FaConfig) {
    library.addIconPacks(FaIconRegular);
    library.addIconPacks(FaIconSolid);
    faService.defaultPrefix = 'far';
  }
}