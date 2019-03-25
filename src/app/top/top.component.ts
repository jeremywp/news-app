import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api-service.service";

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor(private newsService: ApiService) {

  }

  ngOnInit() {
    this.newsService.getTopNews()
      .subscribe(data => {
        console.log(data);
      });
  }

}
