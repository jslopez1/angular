import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './movie/movie.service';
import { HttpModule } from '../../node_modules/@angular/http';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes=[
  { path: 'movies/:filter', component: MovieComponent }


]
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
