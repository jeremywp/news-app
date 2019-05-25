import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api-service.service";
import {Observable} from "rxjs";
import {Article} from "../article";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  articles$: Observable<Article[]>;
  private newsUrl: string;
  searchTerm: string;

  constructor(
    private http: HttpClient,
    private newsService: ApiService) {

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
    this.newsUrl = 'https://newsapi.org/v2/everything?q=' + this.searchTerm + '&apiKey=' + this.apiKey;
    return this.http.get(this.newsUrl).subscribe(data => {
      // @ts-ignore
      this.articles$ = data.articles;
    });
  }

}
