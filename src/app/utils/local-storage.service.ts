import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorage {
  private _store = window.localStorage;

  set(key: string, value: any): void {
    value = JSON.stringify(value);
    this._store.setItem(key, value);
  }

  get(key: string): any {
    let value = this._store.getItem(key);
    if (value) {
      value = JSON.parse(value);
    }
    return value;
  }
}
