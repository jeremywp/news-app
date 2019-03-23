import {Component, NgZone, OnInit} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = {};
  signedIn = false;

  constructor(public fireAuth: AngularFireAuth, private zone: NgZone, private router: Router) { }

  ngOnInit() {

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
    this.router.navigate(['Top', { user: JSON.stringify(user) }]);
  }

  /*register() {
    let user = this.user;
    this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(data => {
        this.zone.run(() => {
          this.profilePic = data['user']['photoURL'];
          user = {
            id: data['user']['uid'],
            name: data['user']['displayName'],
            email: data['user']['email'],
            logo: data['user']['photoURL'],
            games: []
          };
          sessionStorage.setItem('user', JSON.stringify(user));
          this.userService.registerUser(user);
          this.signedIn = true;
        });
        this.router.navigate(['game-details', { user: JSON.stringify(user) }]);
      })
      .catch(error => console.log('Error logging in...', error));
  }*/

}
