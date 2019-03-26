import {Component} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {};
  signedIn = false;

  constructor(public fireAuth: AngularFireAuth, private router: Router){

  }

  signIn() {
    let user = this.user;
    this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(data => {
        user = {
          id: data['user']['uid'],
          name: data['user']['displayName'],
          picture: data['user']['photoURL']
        };
        this.signedIn = true;
        console.log(user);
      });
  }

}
