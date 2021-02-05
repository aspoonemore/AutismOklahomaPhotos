import { Component, Input, OnInit } from '@angular/core';
import { AutismOklahomaImageData } from '../models/imageData';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})

export class PhotoGalleryComponent implements OnInit {
  @Input() title: string = 'Photo Gallery'
  images: AutismOklahomaImageData[] = [];

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

}
