import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.element.component.html',
  styleUrls: ['./server.element.component.css']
})
export class Server{

   @Input() element:{type:string,name:string,content:string}
    
  
}
