import { Injectable } from '@angular/core';
import { AngularFirestore } from "angularfire2/firestore";
import {AngularFireAuth} from "@angular/fire/auth";
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  public user;
  private favoriteArticles: any;
  private userCollectionRef;

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {
    this.userCollectionRef = this.afs.collection<User>('users');

    this.afAuth.authState.subscribe(user => {
      this.user = user;
      this.afs.collection('users').doc(this.user.uid).collection('favoriteArticles').valueChanges()
        .subscribe(data => {
          this.favoriteArticles = data
        });
    });
  }


}
