import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudent } from '../../modules/student';

@Component({
  selector: 'app-student-curd',
  templateUrl: './student-curd.component.html',
  styleUrls: ['./student-curd.component.scss'],
})
export class StudentCurdComponent implements OnInit {
  isInEditMode:boolean=false;
  editObj !: Istudent;
  studentArr: Istudent[] = [
    {
      stdId: 'S101',
      stdName: 'Rahul Sharma',
      stdConatct: '9876543210',
    },
    {
      stdId: 'S102',
      stdName: 'Priya Patel',
      stdConatct: '9123456780',
    },
    {
      stdId: 'S103',
      stdName: 'Amit Kumar',
      stdConatct: '9988776655',
    },
    {
      stdId: 'S104',
      stdName: 'Sneha Reddy',
      stdConatct: '9012345678',
    },
    {
      stdId: 'S105',
      stdName: 'Vikas Singh',
      stdConatct: '9090909090',
    },
  ];

  @ViewChild('stdName') stdName!:ElementRef;
  @ViewChild('stdContact') stdContact!:ElementRef;
  constructor() {}

  ngOnInit(): void {}
  trackByFun(index: number, student: Istudent) {
    return student.stdId;
  }
  onAddStudent(ele1: HTMLInputElement, ele2: HTMLInputElement) {
    let studentName:string = ele1.value;
    let studentdContact:string = ele2.value;

    if(studentName.length > 0 && studentdContact.length>0){
      let newStudent: Istudent = {
      stdId: Date.now().toString(),
      stdName: studentName,
      stdConatct: studentdContact,
    };
    //console.log(newStudent);
    this.studentArr.push(newStudent);
    }
    
  }

  onEdit(student:Istudent){
    this.isInEditMode=true;
    this.editObj=student;
    this.stdName.nativeElement.value=this.editObj.stdName;
    this.stdContact.nativeElement.value=this.editObj.stdConatct;

  }

  onUpdateStudent(){

    //UPDATE_ID
    let UPDATE_ID = this.editObj.stdId;
    //UPDATE_OBJ
    let UPDATE_OBJ : Istudent={

      stdId:UPDATE_ID,
      stdName:this.stdName.nativeElement.value,
      stdConatct:this.stdContact.nativeElement.value
    }

    let getIndex = this.studentArr.findIndex((s) => s.stdId === UPDATE_ID);
    this.studentArr[getIndex] = UPDATE_OBJ;
    this.stdName.nativeElement.value = '';
    this.stdContact.nativeElement.value = '';
    this.isInEditMode=false
  }

onRemove(id:string){
  let getIndex = this.studentArr.findIndex(s=> s.stdId === id);
  this.studentArr.splice(getIndex,1)
}

  

}
