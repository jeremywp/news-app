import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api-service.service";
import {Observable} from "rxjs";
import {Article} from "../article";
import {HttpClient} from "@angular/common/http";
import { AngularFirestore } from "angularfire2/firestore";
import {AngularFireAuth} from "@angular/fire/auth";
import {User} from "firebase";

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  articles$: Observable<Article[]>;
  public category: string;
  private newsUrl: string;
  private apiKey: string = 'bd8960afdf9948aaa291d793d20c2915';
  private favoriteArticles: any;
  categoryOptions: string[] = ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"];
  private userCollectionRef;
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

  ngOnInit() {
    this.newsService.getTopNews()
      .subscribe(data => {
        // @ts-ignore
        this.articles$ = data.articles;
        console.log(this.articles$);
      });
  }

  sortArticles() {
    this.newsUrl = 'https://newsapi.org/v2/top-headlines?category=' + this.category + '&country=us&apiKey=' + this.apiKey;
    return this.http.get(this.newsUrl).subscribe(data => {
      // @ts-ignore
      this.articles$ = data.articles;
      console.log(this.articles$);
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
