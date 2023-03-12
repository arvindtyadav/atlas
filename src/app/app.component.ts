import { Component } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';

import { Observable } from 'rxjs';


import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atlas';
  items: Observable<any[]>;
  constructor(public auth: AngularFireAuth, public db: AngularFireDatabase) {
    this.items = db.list('buildings').valueChanges();

        // Write 100 new buildings to the database
        // Write 100 new buildings to the database
        // for (var i = 1; i <= 100; i++) {
        //   var buildingRef = db.list('buildings').push({
        //     name: "Building " + i,
        //     latitude: this.getRandomLatitude(),
        //     longitude: this.getRandomLongitude(),
        //     // id: buildingRef.key
        //   });
        // }
  }
  // Helper functions to generate random latitudes and longitudes
  getRandomLatitude() {
    return 37.7749 + Math.random() * 0.01; // Random number between 37.7749 and 37.7849
  }

  getRandomLongitude() {
    return -122.4194 + Math.random() * 0.01; // Random number between -122.4194 and -122.4094
  }
  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }
}
