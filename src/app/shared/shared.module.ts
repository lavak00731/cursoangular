import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSnackBarModule
  ],
  exports: [
    MatMenuModule,
    BrowserAnimationsModule,
    MatSnackBarModule 
  ]
})
export class SharedModule { }
