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
    this.storageService.set('Images', this.images);
  }
}
