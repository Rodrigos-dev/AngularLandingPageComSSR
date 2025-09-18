import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

}
