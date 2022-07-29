import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
const Material: any[] = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatTableModule,
  MatDividerModule,
  MatDialogModule,
  MatCheckboxModule
];

@NgModule({
  imports: [Material],
  exports: [Material],
})
export class MaterialModule {}
