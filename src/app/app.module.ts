import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MovieService } from './movie.service';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      MoviesComponent,
      ListMoviesComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      MaterialModule,
      BrowserAnimationsModule
   ],
   providers: [
      MovieService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
