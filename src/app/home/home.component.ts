import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public fireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  signIn() {
    this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  }

}
