import { Component } from '@angular/core';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBxKIfbFmqE3nT04AcEN-9KSR82H4tTdoY",
  authDomain: "crud-firebase-d0a3e.firebaseapp.com",
  projectId: "crud-firebase-d0a3e",
  storageBucket: "crud-firebase-d0a3e.appspot.com",
  messagingSenderId: "765794813590",
  appId: "1:765794813590:web:e3267c184e8e19e6e464b7",
  measurementId: "G-HK797GKR3N"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
