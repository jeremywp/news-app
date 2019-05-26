import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
  ) { }

  private apiKey: string = 'bd8960afdf9948aaa291d793d20c2915';

  private topURL = 'https://newsapi.org/v2/top-headlines?' +
    'country=us' +
    '&language=en' +
    '&apiKey=' + this.apiKey;

  private allURL = 'https://newsapi.org/v2/everything?q=e&language=en&apiKey=' + this.apiKey;


  getTopNews(){
    return this.http.get(this.topURL);
  }

  getAllNews() {
    return this.http.get(this.allURL);
  }
}
