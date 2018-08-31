import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-micomponente',
  templateUrl: './micomponente.component.html',
  styleUrls: ['./micomponente.component.css']
})
export class MicomponenteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 newServerName;
    
 newServerContent;
nombre;
edad;
cargo;
 personaList=[];

 @Output() serverCreated=new EventEmitter<{name:string,content:string}>();

 @Output() bluePrintCreated=new EventEmitter<{name:string,content:string}>();

  onAddServer(){
   this.serverCreated.emit({
     name:this.newServerName,
     content:this.newServerContent
   })
  }
  onAddBluePrint(){
    this.bluePrintCreated.emit({
      name:this.newServerName,
      content:this.newServerContent
    })
  }
  onAdicionar(){
    this.personaList.push({
      nombre:this.nombre,
      edad:this.edad,
      cargo:this.cargo
    });
  }

}
