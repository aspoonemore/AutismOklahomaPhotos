import { Component, Input, OnInit } from '@angular/core';
import { AutismOklahomaImageData } from '../models/imageData';

import { Plugins, CameraResultType, CameraPhoto } from '@capacitor/core';
import { Storage } from '@ionic/storage';
import { ThrowStmt } from '@angular/compiler';
import { StorageService } from '../services/storage.service';

const { Camera } = Plugins;


@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})

export class PhotoGalleryComponent implements OnInit {
  // TODO: Break storage out into a service
  @Input() title: string = 'Photo Gallery'
  images: AutismOklahomaImageData[] = [];

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.storageService.get('Images').then(result => {
      console.log(result);
      if (result && result.length > 0) {
        this.images = result;
      }
    })
   }

  logStorageData() {
    this.storageService.get('Images').then((val) => {
      console.log('Images is', val);
    });
  }

  async takePicture() {
    //take the picture on the camera and get the photo back
    const image: CameraPhoto = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    // Set up the object we want to push int our images array
    let imageData: AutismOklahomaImageData = {
      imagePath: image.webPath,
      imageTitle: '',
      uploadDate: new Date()
    }
    //push the image into the array
    this.images.push(imageData);
    // this.storage.set('Images', this.images).then(result => console.log(result))

    this.storageService.set('Images', this.images);
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    // var imageUrl = image.webPath;
    // Can be set to the src of an image now
  }
}
