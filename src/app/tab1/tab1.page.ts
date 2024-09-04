import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ResponseMDB } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  
  moviesService = inject(MoviesService);

  constructor() {}

  ngOnInit() {
    this.moviesService.getFeatures().subscribe({
      next: (responseMDB: ResponseMDB ) => console.log(responseMDB.results),
      error: error => console.error('Error:', error)
    })
  }

}
