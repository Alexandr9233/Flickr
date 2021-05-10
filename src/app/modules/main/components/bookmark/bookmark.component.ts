import { Component, OnInit } from '@angular/core';
import { FlickrService, StorageImages } from 'src/app/services/flickr.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],
})
export class BookmarkComponent implements OnInit {
  public imagesStorage: Array<StorageImages> = [];

  constructor(private flickrService: FlickrService) {}

  ngOnInit(): void {}
}
