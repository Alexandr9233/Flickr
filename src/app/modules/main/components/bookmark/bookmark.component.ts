import { Component, OnInit } from '@angular/core';
import {
  FlickrService,
  Photo,
  StorageImages,
} from 'src/app/services/flickr.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],
})
export class BookmarkComponent implements OnInit {
  public imageCards: Array<Photo> = [];

  constructor(private flickrService: FlickrService) {}

  ngOnInit(): void {
    this.imageCards = this.flickrService.cardsBook;
  }
  public removeCard(id: string) {
    for (let i = 0; i < this.imageCards.length; i++) {
      if (this.imageCards[i].id === id) {
        this.imageCards.splice(i, 1);

        this.flickrService.removeCard(this.imageCards);
      }
    }
  }
}
