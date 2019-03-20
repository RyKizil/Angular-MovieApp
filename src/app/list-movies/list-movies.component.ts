import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  popularMovies: any;
  upcomingMovies: any;
  genres: any;
  

  constructor(private movieService: MovieService) {
    
  }

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(data => {
      this.popularMovies = data['results'];
      console.log(this.popularMovies);
    });
    this.movieService.getUpcomingMovies().subscribe(data => {
      this.upcomingMovies = data['results'];
      console.log(this.upcomingMovies);
    });
    
    
  }

}
