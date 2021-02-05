import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallery-image',
  templateUrl: './photo-gallery-image.component.html',
  styleUrls: ['./photo-gallery-image.component.scss'],
})
export class PhotoGalleryImageComponent implements OnInit {
  @Input() imagePath: string;

  constructor() { }

  ngOnInit() {}

}
