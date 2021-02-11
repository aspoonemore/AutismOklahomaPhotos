import { Component, Input, OnInit } from '@angular/core';
import { AutismOklahomaImageData } from '../models/imageData';

import { Plugins, CameraResultType, CameraPhoto } from '@capacitor/core';

const { Camera } = Plugins;

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})

export class PhotoGalleryComponent implements OnInit {
  @Input() title: string = 'Photo Gallery'
  images: AutismOklahomaImageData[] = [];
  defaultImage: CameraPhoto;

  constructor() { }

  ngOnInit() { 
    this.images.push(
      { 
        imagePath: 'assets/bob.jpg', 
        imageTitle: 'Test 1', 
        uploadDate: new Date()
      },
      { 
        imagePath: 'assets/goat.jpg', 
        imageTitle: 'Test 2', 
        uploadDate: new Date()
      },
      { 
        imagePath: 'assets/goats.JPG', 
        imageTitle: 'Test 3', 
        uploadDate: new Date()
      }
    );

    console.log(this.images);
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    console.log(image);
    this.defaultImage = image;


    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    // var imageUrl = image.webPath;
    // Can be set to the src of an image now
  }
}
