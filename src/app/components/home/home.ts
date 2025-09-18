import { Component } from '@angular/core';
import { Header } from '../header/header';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimary } from '../btn-primary/btn-primary';
import { NewsletterForm } from '../newsletter-form/newsletter-form';
import { Benefit } from '../benefit/benefit';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Header, 
    NgOptimizedImage,
    BtnPrimary,
    NewsletterForm,
    Benefit,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
