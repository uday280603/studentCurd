import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudent1 } from '../../modules/student1';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from '../../services/snakBar.service';

@Component({
  selector: 'app-students1-curd',
  templateUrl: './students1-curd.component.html',
  styleUrls: ['./students1-curd.component.scss'],
})
export class Students1CurdComponent implements OnInit {
  stdArr: Array<Istudent1> = [
    {
      stdId: '1',
      fname: 'Rahul',
      lname: 'Sharma',
      email: 'rahul.sharma@mail.com',
      contact: 9876543210,
      isActive: false,
    },
    {
      stdId: '2',
      fname: 'Priya',
      lname: 'Verma',
      email: 'priya.verma@mail.com',
      contact: 9123456780,
      isActive: true,
    },
    {
      stdId: '3',
      fname: 'Amit',
      lname: 'Patel',
      email: 'amit.patel@mail.com',
      contact: 9988776655,
      isActive: true,
    },
    {
      stdId: '4',
      fname: 'Sneha',
      lname: 'Kulkarni',
      email: 'sneha.kulkarni@mail.com',
      contact: 9012345678,
      isActive: false,
    },
    {
      stdId: '5',
      fname: 'Arjun',
      lname: 'Singh',
      email: 'arjun.singh@mail.com',
      contact: 9090909090,
      isActive: true,
    },
  ];

  isInEditMode: boolean = false;
  editId!: string;

  @ViewChild('fname') fname!: ElementRef;
  @ViewChild('lname') lname!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;

  constructor(private snackBar: SnackBarService) {}

  ngOnInit(): void {}

  onStdAdd() {
    let val: string = this.fname.nativeElement.value;
    if (val.length > 0) {
      let stdObj: Istudent1 = {
        stdId: Date.now().toString(),
        fname: this.fname.nativeElement.value,
        lname: this.lname.nativeElement.value,
        email: this.email.nativeElement.value,
        contact: this.contact.nativeElement.value,
        isActive: true,
      };
      this.stdArr.unshift(stdObj);
      this.fname.nativeElement.value = '';
      this.lname.nativeElement.value = '';
      this.email.nativeElement.value = '';
      this.contact.nativeElement.value = '';
      this.snackBar.openSnackBar(
        `Student ${stdObj.fname} ${stdObj.lname} is added successfully...!`,
      );
    }
  }

  trackByStudentId(index: number, std: Istudent1) {
    return std.stdId;
  }

  onstdRemove(id: string) {
    let getIndex = this.stdArr.findIndex((s) => s.stdId === id);
    let removeStd = this.stdArr.splice(getIndex, 1);
    this.snackBar.openSnackBar(
      `Student ${removeStd[0].fname} is Removed successfully...!!!`,
    );
  }

  onEdit(std: Istudent1) {
    //console.log(std);
    this.isInEditMode = true;
    this.editId = std.stdId;
    this.fname.nativeElement.value = std.fname;
    this.lname.nativeElement.value = std.lname;
    this.email.nativeElement.value = std.email;
    this.contact.nativeElement.value = std.contact;
  }
  onUpdate() {
    let UPDATE_ID = this.editId;
    let UPDATED_OBJ: Istudent1 = {
      stdId: UPDATE_ID,
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
      isActive: true,
    };

    let getIndex = this.stdArr.findIndex((s) => s.stdId === UPDATE_ID);
    this.stdArr[getIndex] = UPDATED_OBJ;
    this.editId = '';
    this.fname.nativeElement.value = '';
    this.lname.nativeElement.value = '';
    this.email.nativeElement.value = '';
    this.contact.nativeElement.value = '';
    this.snackBar.openSnackBar(
      `The Student ${UPDATED_OBJ.fname} is Updated successfully...!`,
    );
    this.isInEditMode = false;
  }
}
