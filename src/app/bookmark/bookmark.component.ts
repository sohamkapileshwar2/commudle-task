import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css'],

})
export class BookmarkComponent implements OnInit {

  bookmarks: Array<any>;

  constructor() {
    this.bookmarks = JSON.parse(localStorage.getItem('bookmark-list'));
  }

  ngOnInit(): void {
  }

}
