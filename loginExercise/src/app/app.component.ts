import { Component, OnInit } from '@angular/core';
import * as firebase from 'fireBase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){
    firebase.initializeApp({
      apiKey:"AIzaSyDrNNOrHHbzmOviHcCaMxfKDlTDZVBuXcw",
      authDomain: "autenticacion-bdf3d.firebaseapp.com",
    databaseURL: "https://autenticacion-bdf3d.firebaseio.com",
    projectId: "autenticacion-bdf3d",
    storageBucket: "autenticacion-bdf3d.appspot.com",
    messagingSenderId: "105503020755"
    })
  }
  title = 'loginExercise';
}
