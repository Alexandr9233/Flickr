import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FlickrService, Photo } from 'src/app/services/flickr.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  public images: Array<Photo> = [];
  public pageSlice: Array<Photo> = [];
  public keyword: string = '';
  public inputTag: boolean = false;
  public index: number = 0;
  constructor(private flickrService: FlickrService) {}

  ngOnInit(): void {}

  search(event: any) {
    this.keyword = event.target.value.toLowerCase();
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService.searchBykeyWord(this.keyword).subscribe((response) => {
        this.images = response;
        this.pageSlice = this.images.slice(0, 6);
      });
    }
  }
  getImage(card: Photo, index: number) {
    this.flickrService.saveImage(card, index);
  }
  onChangePage(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.images.length) {
      endIndex = this.images.length;
    }
    this.pageSlice = this.images.slice(startIndex, endIndex);
  }
  showCloseInput(index: number) {
    this.index = index;
    this.inputTag = !this.inputTag;
  }
}
