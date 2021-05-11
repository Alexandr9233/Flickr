import { Component, OnInit } from '@angular/core';
import { FlickrService, Photo } from './services/flickr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'FlickrApp';
  showFiller = false;
  public hidden = true;
  public bookmarks: Array<number> = [];
  constructor(private flickrService: FlickrService) {}
  ngOnInit(): void {
    this.flickrService.storageImages$.subscribe((response) => {
      this.bookmarks = response;
      this.bookmarks.length > 0 ? (this.hidden = false) : (this.hidden = true);
      console.log(this.bookmarks);
    });
  }
  checkOnActive(event: any) {
    setTimeout(() => {
      console.log('inActive');
    }, 3000);
  }
}
