import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-benefit-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './benefit.html',
  styleUrl: './benefit.scss'
})
export class Benefit {
  @Input("img-path") imgPath: string = '';
  @Input("card-title") cardTitle: string = '';
  @Input("card-description") cardDescription: string = '';
}
