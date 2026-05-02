import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Istudent1 } from '../modules/student1';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private _matSnackBar: MatSnackBar) {}

  openSnackBar(msg: string) {
    this._matSnackBar.open(msg, 'Close', {
      duration: 3000,
    });
  }





}


