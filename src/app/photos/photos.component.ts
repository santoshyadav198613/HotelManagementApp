import { Component, OnInit } from '@angular/core';

import { PhotosService } from './service/photos.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  providers: [PhotosService]
})
export class PhotosComponent implements OnInit {
  downLoadedData: number = 0;
  photosList: any;
  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.photosService.getPhotos().subscribe(
      (event) => {
        switch (event.type) {
          case HttpEventType.ResponseHeader:
            console.log(event.status);
            break;
          case HttpEventType.DownloadProgress:
            this.downLoadedData = this.downLoadedData + event.loaded;
            break;
          case HttpEventType.Response:
            this.photosList = event.body;
            break;
        }
      },
      (err) => console.log(err)
    )
  }

}
