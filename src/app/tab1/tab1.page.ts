import { Component, inject, OnInit, signal } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/interfaces';

// SwipSlider config
import { IonicSlides } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  swiperModules = [IonicSlides];
  movies = signal<Movie[]>([]);
  moviesService = inject(MoviesService);

  constructor() {}

  ngOnInit() {
    this.moviesService.getFeatures().subscribe({
      next: (response) =>{ console.log(response); this.movies.set(response.results)},
      error: error => console.error('Error:', error)
    })
  }

}
