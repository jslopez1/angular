import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie/movie.service';
import * as $ from 'jquery';
import {Response} from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private movieService:MovieService,private router:Router){}
  filtro:string;
  data:any[];
  
  ngOnInit(){
    $('#buscador').on('keyup',(evt)=>{
      if(evt.keyCode==13){
        
        if(this.filtro.length>0){
         this.movieService.getMovieByFilter(this.filtro).subscribe(
              (response:Response)=>{
  
                  this.data=response.json().Search;
                  this.router.navigate(['/movies'])
                  console.log(this.data[0].Title);
                  console.log(this.data);
              }
          ); 
          
        }else{
          
        }
      }
    })
  }
}
