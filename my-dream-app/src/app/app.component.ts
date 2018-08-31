import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'valor de title en app.component.ts'; // propiedad a interpolar
  disabled = true; // el boton estara activo e inactivo, dependiendo del valor de disabled (false - true)
  text = ''; //esta ira variando de acuerdo a lo que escriba en el input
  imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'; //es el valor del atributo src de la etiqueta img
  length = this.text.length;
  disabledOnInput = true;
  clicked = false; //guarda el estado del boton
  buttonText = 'Clickeeme omeee';
  inputText="Binding bidireccional";
  serverElements=[];
  
  onUpdateInput(event: Event) {
    this.text = (<HTMLInputElement>event.target).value;
    this.disabledOnInput = this.text.length <= 0;
  }
  noText(){
    this.disabled=this.inputText.length<=0;
  }

  onClickButton() {
    this.clicked = !this.clicked;
    this.buttonText = this.clicked ? 'dejeme como estaba': 'Clickeeme omeee';
    this.text="";
    this.disabledOnInput = true;
  }
  onServerAdded(serverData:{name:string,content:string}){
     this.serverElements.push({
       type:"server",
       name: serverData.name,
       content:serverData.content
     });
   }
   onBluePrintAdded(serverData:{name:string,content:string}){
    this.serverElements.push({
      type:"bluePrint",
      name: serverData.name,
      content:serverData.content
    });
   }
 
}
