import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Lesson } from './lesson.inderface';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent {
  editMode = false;
  tempLesson: Lesson = {};

  @Input() lesson: Lesson;
  @Input() index: number;
  @Output() lessonRemoved = new EventEmitter<number>();
  @Output() lessonChanged = new EventEmitter <{ index: number; lesson: Lesson}>();

  startEdit() {
    this.tempLesson = this.copyLesson(this.lesson);
    this.editMode = true;
  }

  remove() {
    this.lessonRemoved.emit(this.index);
  }

  save() {
    this.lesson = this.copyLesson(this.tempLesson);
    this.editMode = false;
    this.lessonChanged.emit({
      index: this.index,
      lesson: this.lesson
    });
  }

  cancelEdit() {
    this.tempLesson = {};
    this.editMode = false;
  }

  private copyLesson(appLesson: Lesson): Lesson {
    return JSON.parse(JSON.stringify(appLesson));
  }
}
