import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api-service.service";
import {Observable} from "rxjs";
import {Article} from "../article";
import {HttpClient} from "@angular/common/http";
import { AngularFirestore } from "angularfire2/firestore";
import {AngularFireAuth} from "@angular/fire/auth";
import {User} from "firebase";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  articles$: Observable<Article[]>;
  private newsUrl: string;
  searchTerm: string;
  private userCollectionRef;
  private favoriteArticles: any;
  public user;

  constructor(
    private http: HttpClient,
    private newsService: ApiService,
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

  private apiKey: string = 'bd8960afdf9948aaa291d793d20c2915';

  ngOnInit() {
    this.newsService.getAllNews()
      .subscribe(data => {
        // @ts-ignore
        this.articles$ = data.articles;
        console.log(data);
      });
  }

  searchArticles() {
    this.newsUrl = 'https://newsapi.org/v2/everything?q=' + this.searchTerm + '&language=en&apiKey=' + this.apiKey;
    return this.http.get(this.newsUrl).subscribe(data => {
      // @ts-ignore
      this.articles$ = data.articles;
    });
  }

  saveArticle(user, article) {
    const currentArticle = this.favoriteArticles.find(_ => _ === article);
    const articleIndex = this.favoriteArticles.indexOf(article);
    if (!currentArticle) {
      this.favoriteArticles.push(article);
    } else {
      this.favoriteArticles[articleIndex] = article;
    }
    this.userCollectionRef.doc(user.uid).update({
      favoriteArticles: this.favoriteArticles
    }, { merge: true });
  }

}
