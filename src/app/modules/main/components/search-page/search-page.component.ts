import { Component, OnInit } from '@angular/core';
import { FlickrService, Photo } from 'src/app/services/flickr.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  images: Array<Photo> = [];
  keyword: string = '';
  constructor(private flickrService: FlickrService) {}

  ngOnInit(): void {}

  search(event: any) {
    this.keyword = event.target.value.toLowerCase();
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService
        .searchBykeyWord(this.keyword)
        .subscribe((response) => console.log((this.images = response)));
    }
  }
  getImage(index: number, id: string) {
    this.flickrService.saveImage(String(index), id);
  }
}
