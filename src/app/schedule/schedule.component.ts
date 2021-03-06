import { Component, OnInit } from '@angular/core';

import { Lesson } from '../lesson/lesson.inderface';
import { LocalStorage } from '../utils/local-storage.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  lessons: Lesson[];

  constructor(private _localStorage: LocalStorage) {}

  ngOnInit() {
    this.lessons = this._localStorage.get('lessons') || [];
  }

  addLesson() {
    this.lessons.push({});
    this._localStorage.set('lessons', this.lessons);
  }

  lessonRemoved(index: number) {
    this.lessons = this.lessons.filter((appLesson, i) => i !== index);
    this._localStorage.set('lessons', this.lessons);
  }

  lessonChanged(changeData: { index: number; lesson: Lesson }) {
    this.lessons[changeData.index] = changeData.lesson;
    this._localStorage.set('lessons', this.lessons);
  }
}
