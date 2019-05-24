import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api-service.service";
import {Observable} from "rxjs";
import {Article} from "../article";

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  articles$: Observable<Article[]>;

  constructor(private newsService: ApiService) {

  }

  ngOnInit() {
    this.newsService.getTopNews()
      .subscribe(data => {
        // @ts-ignore
        this.articles$ = data.articles;
        console.log(this.articles$);
      });
  }

}
