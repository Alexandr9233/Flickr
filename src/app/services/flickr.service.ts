import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface FlickrPhoto {
  farm: string;
  id: string;
  secret: string;
  server: string;
  title: string;
}

export interface FlickrOutput {
  photos: {
    photo: FlickrPhoto[];
  };
}

export interface Photo {
  url: string;
  title: string;
  id: string;
}

export interface StorageImages {
  index: string;
  id: string;
}

@Injectable({ providedIn: 'root' })
export class FlickrService {
  public name: string = '';
  public response: any;
  public storageImages: Array<StorageImages> = [];

  constructor(private http: HttpClient) {}

  public searchBykeyWord(keyword: string) {
    const url =
      'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
    const params = `api_key=${environment.flickr.key}&text=${keyword}&format=json&nojsoncallback=1&per_page=60&page=12`;
    return this.http.get<FlickrOutput>(url + params).pipe(
      map((res: FlickrOutput) => {
        const urlArr: Array<Photo> = [];
        res.photos.photo.forEach((ph: FlickrPhoto) => {
          const photoObj: Photo = {
            url: `https://farm${ph.farm}.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}`,
            title: ph.title,
            id: ph.id,
          };
          urlArr.push(photoObj);
        });
        return urlArr;
      })
    );
  }
  saveImage(index: string, id: string) {
    const card: StorageImages = {
      index: index,
      id: id,
    };
    this.storageImages.push(card);
  }
}
