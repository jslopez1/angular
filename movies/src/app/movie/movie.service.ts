import { Injectable } from "@angular/core";
import {Http} from "@angular/http";
@Injectable()
export class MovieService{
    constructor(private http:Http){}

    getMovieByFilter(filter:string){
       return this.http.get("http://www.omdbapi.com/?apikey=42af3ea1&s="+filter);
    }

}