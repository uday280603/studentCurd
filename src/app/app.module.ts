import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentCurdComponent } from './shared/component/student-curd/student-curd.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentCurdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
