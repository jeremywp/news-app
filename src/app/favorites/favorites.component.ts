import { Component, OnInit } from '@angular/core';
import {User} from "firebase";
import {Router} from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favoriteArticles = [];
  user: User;


  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      this.user = user;
      this.afs.collection('users').doc(user.uid).ref.get().then(doc => {
        this.favoriteArticles = doc.data().favoriteArticles;
      });
    });
  }



}
