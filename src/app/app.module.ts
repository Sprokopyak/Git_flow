import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ScheduleComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
