import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  item: AngularFireList<Item>;
  constructor(private db: AngularFireDatabase) { }
  getCategories() {
    this.item = this.db.list('/categories', ref => ref.orderByChild('name'));
    return this.item;
  }
}
class Item {
  $key: string;
  title: string;
  body: string;
  timeStamp: number;
  active = true;
}
