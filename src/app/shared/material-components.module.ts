import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNavList,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

const materialModules = [
  MatButtonModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatMenuModule,
  MatCardModule,
  MatTableModule,
  MatIconModule
];

/**
 * This module imports all of the material components which will
 * be used in the application. Importing and exporting them explicitly
 * allows us to have a smaller bundle size.
 */
@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialComponentsModule {}
