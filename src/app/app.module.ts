import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LessonComponent } from './lesson/lesson.component';
import { LocalStorage } from './utils/local-storage.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ScheduleComponent,
    LessonComponent,
  ],
  providers: [ LocalStorage ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
