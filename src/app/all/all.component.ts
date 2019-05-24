import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api-service.service";
import {Observable} from "rxjs";
import {Article} from "../article";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  articles$: Observable<Article[]>;

  constructor(private newsService: ApiService) {

  }

  ngOnInit() {
    this.newsService.getAllNews()
      .subscribe(data => {
        // @ts-ignore
        this.articles$ = data.articles;
        console.log(data);
      });
  }

}
