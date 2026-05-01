import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ipost } from '../../modules/post';

@Component({
  selector: 'app-post-curd',
  templateUrl: './post-curd.component.html',
  styleUrls: ['./post-curd.component.scss'],
})
export class PostCurdComponent implements OnInit {

  isEditMode:boolean  = false;
  editObj !: Ipost; 
  postArr: Ipost[] = [
    {
      postId: 'p1',
      postTitle: 'Introduction to Angular',
      postBody:
        'Angular is a powerful front-end framework developed by Google for building dynamic web applications.',
    },
    {
      postId: 'p2',
      postTitle: 'Understanding TypeScript',
      postBody:
        'TypeScript is a superset of JavaScript that adds static typing and improves developer productivity.',
    },
    {
      postId: 'p3',
      postTitle: 'What is Dependency Injection?',
      postBody:
        'Dependency Injection is a design pattern used in Angular to manage service instances efficiently.',
    },
  ];

  @ViewChild('postTitleControl')postTitleControl!:ElementRef;
   @ViewChild('postBodyControl')postBodyControl!:ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAddPost(ele1: HTMLInputElement, ele2: HTMLInputElement) {
    let addPostTitle: string= ele1.value;
    let addPostBody : string= ele2.value;
    if (addPostTitle.length > 0 && addPostBody.length > 0) {
      let newPostObj: Ipost = {
        postId: Date.now().toString(),
        postTitle: addPostTitle,
        postBody: addPostBody,
      };
     // console.log(newPostObj);
      this.postArr.push(newPostObj)
    }
  }

  onRemovePost(id:string){
     let getIndex = this.postArr.findIndex(p=> p.postId === id);
  this.postArr.splice(getIndex,1)
  }
  trackByFun(index:number , post : Ipost){
    return post.postId;
  }


  onEditPost(post : Ipost){
    this.isEditMode=true;
    this.editObj=post;
    this.postTitleControl.nativeElement.value = this.editObj.postTitle;
    this.postBodyControl.nativeElement.value = this.editObj.postBody;


  }

  onUpdatePost(){
    let UPDATE_ID = this.editObj.postId;
    let UPDATE_OBJ:Ipost = {

      postId : UPDATE_ID,
      postTitle : this.postTitleControl.nativeElement.value,
      postBody :this.postBodyControl.nativeElement.value,
      
    }
    console.log(UPDATE_OBJ);
    let getIndex = this.postArr.findIndex(p => p.postId === UPDATE_ID);
    this.postArr[getIndex] = UPDATE_OBJ;
    this.postTitleControl.nativeElement.value='';
    this.postBodyControl.nativeElement.value='';
    this.isEditMode=false;
    
  }
}
